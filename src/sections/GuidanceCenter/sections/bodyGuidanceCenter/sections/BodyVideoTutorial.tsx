import { AccordionItem } from "../../AccordionItem";

export default function BodyVideoTutorial() {
  const questions = [
    {
      title: "ارزهشت چیست؟",
      content:
        "اگر قصد خرید رمز ارزی مثل بیت کوین و یا هر ارز دیگری دارید یا میخواهید دارایی دیجیتال خود را به ریال تبدیل کنید! ارز هشت به شما کمک میکند در سریعترین زمان ممکن به این هدف برسید. ارز هشت یکی از قدیمی ترین سایت های حوزه ارز دیجیتال میباشد که فعالیت خود را از سال 97 شروع کرده و در این مدت فعالیت توانسته رضایت مشتریان خود را جلب نماید.",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "ارزدیجیتال چیست؟",
      content: "ارز دیجیتال یک واحد پولی دیجیتال یا مجازی است که از رمزنگاری استفاده می‌کند.",
    },
    {
      title: "چگونه میتوان حساب کاربری خود را مسدود کرده یا از حالت مسدود خارج کنیم؟",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "بیت کوین چیست؟",
      content: "بیت کوین اولین ارز دیجیتال غیرمتمرکز است که بر روی بلاکچین کار می‌کند.",
    },
    {
      title: "چگونه میتوان حساب کاربری خود را مسدود کرده یا از حالت مسدود خارج کنیم؟",
      content: "برای مسدود کردن حساب کاربری، با پشتیبانی تماس بگیرید.",
    },
  ];
  return (
    <div>
    {questions.map((question, index) => (
      <AccordionItem
        key={index}
        title={question.title}
        videoLink={question.videoLink}
      >
        {question.content}
      </AccordionItem>
    ))}
  </div>
  )
}
