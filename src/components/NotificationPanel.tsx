import Button from "./Button";
import Tab from "./Tabs";
import Select from "./Select";

type PanelProps = {
    isOpen: boolean;
    children?: React.ReactNode;
};

export default function NotificationPanel({ isOpen, children }: PanelProps) {
    return (
        <div
            className={`
                fixed top-0 right-0 bottom-0
                w-[416px]
                bg-white
                z-[300]
                shadow-[-8px_0_30px_rgba(0,0,0,0.10)]
                flex flex-col
                font-manrope
                text-[14px]
                leading-[1.5]
                text-dark
                transition-transform duration-[240ms]
                ease-[cubic-bezier(.4,0,.2,1)]
                ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
        >
            {/* PANEL HEADER */}
            <div className="px-[22px] pt-[20px] pb-[14px]">

                {/* Header row */}
                <div className="flex items-center justify-between">
                    <h2 className="text-[21px] font-bold tracking-[-0.02em]">
                        Notifications
                    </h2>

                    <div className="flex items-center gap-[10px]">
                        <button
                            className="
                                bg-transparent
                                border-none
                                text-[13px]
                                font-bold
                                text-slate-dark
                                p-0
                            "
                        >
                            Mark all as read
                        </button>

                        <Button />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-[22px] mt-4">
                    <Tab label="Unread" />
                    <Tab label="All" />
                    <Tab label="Trash" />
                </div>

            </div>

            {/* Subbar */}
            <div
                className="
                    px-[22px]
                    py-[11px]

                    flex
                    items-center
                    justify-between
                    min-h-[47px]
                "
            >

                <Select />
                {/* Left content */}

                {/* Right content */}
            </div>
        </div>
    );
}