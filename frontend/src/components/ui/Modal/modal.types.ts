import type { ReactNode } from "react";

export type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: ModalSize;
  closeOnBackdrop?: boolean;
}

export interface ModalSectionProps {
  children: ReactNode;
  className?: string;
}