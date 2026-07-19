import type { CardSectionProps } from "./card.types";
import { cardFooterStyles } from "./card.styles";

const CardFooter = ({
  children,
  className = "",
}: CardSectionProps) => {
  return (
    <div
      className={`
        ${cardFooterStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CardFooter;