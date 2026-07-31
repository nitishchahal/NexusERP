import type { CardSectionProps } from "./card.types";
import { cardHeaderStyles } from "./card.styles";

const CardHeader = ({
  children,
  className = "",
}: CardSectionProps) => {
  return (
    <header
      className={`
        ${cardHeaderStyles}
        relative flex flex-col items-center text-center
        ${className}
      `}
    >
      {children}
    </header>
  );
};

export default CardHeader;