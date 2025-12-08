interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="bg-card text-card-foreground flex transform-gpu flex-col justify-between rounded-xl border shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">
      <div className="p-6">{children}</div>
    </div>
  );
}
