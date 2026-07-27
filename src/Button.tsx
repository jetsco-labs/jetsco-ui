import { ReactNode } from "react";

type Props = { variant?: "primary" | "ghost"; onClick?: () => void; children: ReactNode };

export function Button({ variant = "primary", onClick, children }: Props) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
