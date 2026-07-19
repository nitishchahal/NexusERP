import type { CardSectionProps } from "./card.types";
import { cardHeaderStyles } from "./card.styles";

const CardHeader = ({
  children,
  className = "",
}: CardSectionProps) => {
  return (
    <div
      className={`
        ${cardHeaderStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CardHeader;