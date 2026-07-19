import { X } from "lucide-react";

import type { ModalSectionProps } from "./modal.types";

interface ModalHeaderProps extends ModalSectionProps {
  onClose?: () => void;
}

const ModalHeader = ({
  children,
  className = "",
  onClose,
}: ModalHeaderProps) => {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        border-b
        px-6
        py-4
        ${className}
      `}
    >
      <div>{children}</div>

      {onClose && (
        <button
          onClick={onClose}
          className="rounded-md p-2 hover:bg-slate-100"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default ModalHeader;