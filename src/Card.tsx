import { ReactNode } from "react";

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </section>
  );
}
