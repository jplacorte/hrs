import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  className?: string;
  onClick: () => void;
}

export default function IconButton({ icon, className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
}
