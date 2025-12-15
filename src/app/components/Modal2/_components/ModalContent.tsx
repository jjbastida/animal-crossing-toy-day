/** @jsxImportSource @emotion/react */

import { modalContent } from "../Modal.styles";
import { ModalContentProps } from "../Modal.types";

export default function ModalContent({ children, ...rest }: ModalContentProps) {
  return (
    <section css={modalContent} {...rest}>
      {children}
    </section>
  );
}
