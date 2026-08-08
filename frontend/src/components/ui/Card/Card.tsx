import type { CardProps } from "./card.types";
import { cardStyles } from "./card.styles";
import { cn } from "../../../lib/cn";

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div {...props} className={cn(cardStyles, className)}>
      {children}
    </div>
  );
};

export default Card;