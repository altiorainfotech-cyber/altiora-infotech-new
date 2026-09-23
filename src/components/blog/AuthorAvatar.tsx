function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function AuthorAvatar({ name, size = 40 }: { name: string; size?: number }) {
  return (
    <div
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-900 font-black text-white ring-2 ring-blue-500/20 shadow-md"
      aria-hidden="true"
    >
      {initialsFromName(name)}
    </div>
  );
}
