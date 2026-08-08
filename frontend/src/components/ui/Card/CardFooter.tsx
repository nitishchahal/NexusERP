import type { CardSectionProps } from "./card.types";
import { cardFooterStyles } from "./card.styles";

const CardFooter = ({
  children,
  className = "",
}: CardSectionProps) => {
  return (
    <footer className={`${cardFooterStyles} ${className}`}>
      {children}
    </footer>
  );
};

export default CardFooter;