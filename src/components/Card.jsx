export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl shadow-md p-4 ${className}`}>{children}</div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
