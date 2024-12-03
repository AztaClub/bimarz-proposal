interface BadgeProps {
  msg: string;
  color: "blue" | "green" | "red" | "yellow" | "purple";
}

export const Badge = ({ msg, color }: BadgeProps) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    purple: "bg-purple-100 text-purple-800",
  };

  return (
    <span
      className={`ml-3 ${colorClasses[color]} text-sm font-medium px-3 py-1 rounded-full`}
    >
      {msg}
    </span>
  );
};
