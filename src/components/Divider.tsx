export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent via-orange-DEFAULT to-orange-DEFAULT" />
      <span className="h-1.5 w-1.5 rounded-full bg-orange-DEFAULT" />
    </div>
  );
}
