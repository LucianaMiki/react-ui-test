type SelectProps = {
    onClick?: () => void;
};

export default function Select({
    onClick,
}: SelectProps) {
    return (
        <div
            onClick={onClick}
            className="
                flex
                items-center
                gap-[10px]
                cursor-pointer
            "
        >
            <div
                className="
                    w-[19px]
                    h-[19px]
                    rounded-[5px]
                    border-[1.5px]
                    border-[#DDD9D2]
                    bg-white
                    flex
                    items-center
                    justify-center
                    shrink-0
                    transition-all
                    duration-[120ms]
                "
            >
                
            </div>
        </div>
    );
}