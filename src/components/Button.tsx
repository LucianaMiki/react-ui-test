type ButtonProps = {
  onClick?: () => void;
};

export default function Button({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-[34px]
        h-[34px]
        rounded-[8px]
        border
        border-[#DDD9D2]
        bg-white
        text-[#59585A]
        flex
        items-center
        justify-center
        cursor-pointer
      "
      aria-label="Close"
    >
      ✕
    </button>
  );
}