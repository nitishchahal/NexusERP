import type { CardSectionProps } from "./card.types";
import { cardContentStyles } from "./card.styles";

const CardContent = ({
  children,
  className = "",
}: CardSectionProps) => (
  <div className={`${cardContentStyles} ${className}`}>
    {children}
  </div>
);

export default CardContent;