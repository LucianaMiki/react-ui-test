type TabProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function Tab({
  label,
  isActive = false,
  onClick,
}: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        bg-transparent
        border-none
        font-manrope
        text-[14px]
        font-semibold
        cursor-pointer
        pb-3
        flex
        items-center
        gap-[7px]
        ${
          isActive
            ? "text-[#1E1E1E]"
            : "text-[#6B6560]"
        }
      `}
    >
      {label}
    </button>
  );
}