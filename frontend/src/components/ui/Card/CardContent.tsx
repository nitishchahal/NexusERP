import type { CardSectionProps } from "./card.types";
import { cardContentStyles } from "./card.styles";

const CardContent = ({
  children,
  className = "",
}: CardSectionProps) => {
  return (
    <div
      className={`
        ${cardContentStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CardContent;