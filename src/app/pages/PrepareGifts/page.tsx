import PrepareGiftsComponent from "./_components/PrepareGiftsComponent";
import { pageContainer } from "./PrepareGifts.styles.ts";

function PrepareGiftsPage(): React.ReactNode {
  return (
    <div css={pageContainer}>
      <PrepareGiftsComponent />
    </div>
  );
}

export default PrepareGiftsPage;
