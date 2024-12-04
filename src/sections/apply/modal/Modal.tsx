import ChartSuccess from "@/assets/icons/job/chartSuccess";

interface ModalProps {
    onClose: () => void;
    isSuccess: boolean; // پراپ جدید برای تعیین موفقیت یا خطا
}

export const Modal = ({ onClose, isSuccess }: ModalProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-[400px] h-[380px] bg-secondary border border-primary rounded-xl flex flex-col items-center justify-center p-6">
                {isSuccess ? (
                    <ChartSuccess />
                ) : (
                    <ChartSuccess /> // در صورت خطا یک آیکون متفاوت نمایش داده می‌شود
                )}

                <p className={`text-lg font-bold mt-4 text-center ${isSuccess ? 'text-foreground' : 'text-red-500'}`}>
                    {isSuccess ? (
                        <>
                            درخواست شما با
                            <span className="text-green-500"> موفقیت </span>
                            ارسال شد
                        </>
                    ) : (
                        "اطلاعات وارد شده اشتباه است"
                    )}
                </p>

                <p className="text-lg font-bold mt-4 text-center text-foreground">
                    {isSuccess ? "و با شما تماس گرفته خواهد شد." : "لطفاً دوباره تلاش کنید."}
                </p>

                <button
                    className="mt-6 bg-primary text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    بستن
                </button>
            </div>
        </div>
    );
};
