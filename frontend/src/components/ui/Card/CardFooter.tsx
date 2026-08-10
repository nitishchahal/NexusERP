import type { CardSectionProps } from "./card.types";
import { cardFooterStyles } from "./card.styles";

const CardFooter = ({
  children,
  className = "",
}: CardSectionProps) => {
  return (
    <footer
      className={`
        ${cardFooterStyles}
        flex
        items-center
        justify-between
        gap-4
        border-t
        border-gray-200
        bg-gray-50
        px-5
        py-4
        text-sm
        text-gray-600
        sm:px-6
        sm:py-5
        ${className}
      `}
    >
      {children}
    </footer>
  );
};

export default CardFooter;