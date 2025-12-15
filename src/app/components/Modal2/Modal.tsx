/** @jsxImportSource @emotion/react */
import { useEffect, useState, Children, isValidElement, cloneElement, ReactElement } from "react";
import { createRoot } from "react-dom/client";
import FocusLock from "react-focus-lock";
import ModalHeader from "./_components/ModalHeader";
import ModalFooter from "./_components/ModalFooter";
import ModalContent from "./_components/ModalContent";
import * as styles from "./Modal.styles";
import { CreateModalOptions, ModalInstance, ModalHeaderProps, ModalProps } from "./Modal.types";

/**
 * ### Modal
 * Displays content in a focused overlay dialog that blocks interaction with the rest of the page. Use for confirmations, forms, or content that requires full user attention before proceeding.
 *
 * **Props**
 * - `open` - Whether the modal is visible (boolean).
 * - `onClose` - Callback function when modal is closed (function).
 * - `children` - Modal content including Modal.Header, Modal.Content, and Modal.Footer (React.ReactNode).
 * - `position` - Modal position: "fixed" or specific position like "top center" (string).
 * - `overlayProps` - Props to pass to the overlay container (object).
 */

function Modal({ open, onClose, children, overlayProps, position = "fixed", ...rest }: ModalProps) {
  const [renderModal, setRenderModal] = useState(open);
  const isAbsolute = position !== "fixed";

  function handleEscapeKey(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    if (open) {
      setRenderModal(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => {
        setRenderModal(false);
      }, 300);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return renderModal ? (
    <FocusLock>
      {!isAbsolute ? null : <div css={[styles.skrim, styles.transparentSkrim]} onClick={onClose} />}
      <div
        css={[
          isAbsolute ? styles.modalOverlayAbsolute : styles.modalOverlay,
          isAbsolute && styles.positionStyles[position],
        ]}
        data-open={open}
        {...overlayProps}
      >
        {isAbsolute ? null : <div css={styles.skrim} onClick={onClose} />}
        <div
          css={[styles.modalContainer, isAbsolute && styles.modalWidthAbsolute]}
          role="dialog"
          aria-modal="true"
          {...rest}
        >
          {Children.map(children, (child) => {
            if (isValidElement(child) && child.type === Modal.Header) {
              return cloneElement(child as ReactElement<ModalHeaderProps>, { onClose });
            }
            return child;
          })}
        </div>
      </div>
    </FocusLock>
  ) : null;
}

Modal.create = (options: CreateModalOptions): ModalInstance => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  let isOpen = false;

  const render = (open: boolean) => {
    root.render(
      <Modal open={open} onClose={() => instance.close()}>
        {options.title && <Modal.Header>{options.title}</Modal.Header>}
        {options.body && <Modal.Content>{options.body}</Modal.Content>}
        {options.buttons && <Modal.Footer>{options.buttons}</Modal.Footer>}
      </Modal>,
    );
  };

  const instance: ModalInstance = {
    open: () => {
      isOpen = true;
      render(true);
    },
    close: () => {
      isOpen = false;
      render(false);
      setTimeout(() => instance.destroy(), 300);
    },
    destroy: () => {
      root.unmount();
      document.body.removeChild(container);
    },
  };

  render(false);
  return instance;
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
