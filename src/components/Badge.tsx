interface BadgeProps {
  msg: string;
  color: "blue" | "green" | "red" | "yellow" | "purple";
}

export const Badge = ({ msg, color }: BadgeProps) => {
  return (
    <span
      className={`ml-3 bg-${color}-100 text-${color}-800 text-sm font-medium px-3 py-1 rounded-full`}
    >
      {msg}
    </span>
  );
};
