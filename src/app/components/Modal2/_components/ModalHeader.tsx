/** @jsxImportSource @emotion/react */
import { modalHeader, headerTitle, closeButtonWrapper } from "../Modal.styles";
import IconButton from "@/components/IconButton/IconButton";
import { ModalHeaderProps } from "../Modal.types";

export default function ModalHeader({ children, onClose, ...rest }: ModalHeaderProps) {
  return (
    <section css={modalHeader} {...rest}>
      <h2 css={headerTitle}>{children}</h2>
      {onClose && (
        <div css={closeButtonWrapper}>
          <IconButton
            variant="ghost"
            icon="X"
            size="small"
            onClick={onClose}
            ariaLabel="Close modal"
          />
        </div>
      )}
    </section>
  );
}
