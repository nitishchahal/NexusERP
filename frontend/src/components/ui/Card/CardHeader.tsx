import type { CardSectionProps } from "./card.types";
import { cardHeaderStyles } from "./card.styles";

const CardHeader = ({
  children,
  className,
}: CardSectionProps) => {
  return (
    <header
      className={[
        cardHeaderStyles,
        "relative flex flex-col items-center text-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </header>
  );
};

export default CardHeader;