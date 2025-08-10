import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. Items must be unused and in their original packaging."
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, we’ll send you a tracking link via email so you can follow its journey."
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship worldwide, though delivery times and costs vary by location."
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 24 hours of purchase by contacting our support team."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="md:pt-[80px] md:pb-[120px] py-[70px] faq">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="secTitle font-bold text-center mb-8">
            Got Questions? We've Got You Covered.
        </h2>

        {/* FAQ Wrapper */}
        <div className="faqWrapper mx-auto space-y-4">
            {faqs.map((item, index) => (
            <div
                key={index}
                className="faqElement cursor-pointer bg-grey shadow-sm"
                onClick={() => toggleFAQ(index)}
            >
                {/* Question */}
                <div className={`flex justify-between items-center px-4 pt-4 pb-2 ${openIndex === index ? "question" : ""}`}>
                    <h3 className="md:text[16px] text-[14px]">{item.question}</h3>

                    {/* Rounded Icon */}
                    <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                        openIndex === index
                            ? ""
                            : " text-gray-800 border-gray-300"
                        }`}
                    >
                        {openIndex === index ? "−" : "+"}
                    </span>
                </div>

                {/* Answer */}
                {openIndex === index && (
                <p className="mt-2 text-gray-600 px-4 pb-4 md:text[16px] text-[14px]">{item.answer}</p>
                )}
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}