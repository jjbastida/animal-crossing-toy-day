/** @jsxImportSource @emotion/react */

import { modalFooter, buttonGroup } from "../Modal.styles";
import { ModalFooterProps } from "../Modal.types";

export default function ModalFooter({ children, ...rest }: ModalFooterProps) {
  return (
    <section css={modalFooter} {...rest}>
      <div css={buttonGroup}>{children}</div>
    </section>
  );
}
