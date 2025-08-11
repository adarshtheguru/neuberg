import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What makes Neuberg’s MRI scan advanced and patient-friendly?",
      answer:
        "Our Digital MRI scanner with Optical RF technology provides ultra-clear images with needle-free imaging and non-contrast angiography, reducing the need for injections. It offers high-resolution brain imaging, high-definition abdomen scans, free-breathing whole-abdomen scans, and advanced capabilities like quantitative perfusion imaging, liver fat and iron quantification, and cartilage degeneration color mapping. The system can also clearly detect small vessels and micro-bleeds for early diagnosis."
    },
    {
      question: "How safe and detailed is Neuberg’s CT scan?",
      answer:
        "We use the Innovative Low Dose Brivo CT385 Scanner, offering high-resolution images with sub-millimeter slice thickness. Features like ASIR (Adaptive Statistical Iterative Reconstruction) and Organ Dose Modulation minimize radiation exposure without compromising quality. Fast scanning and post-processing improve both diagnostic accuracy and patient comfort."
    },
    {
      question: "What benefits does Neuberg’s Digital X-Ray offer?",
      answer:
        "Our direct digital X-Ray ensures instant, high-quality images with reduced radiation dose and no retakes. We use MUSICA² gold-standard image processing, Cesium Iodide DR detectors, and a U-arm design for flexible positioning and patient comfort. Portable digital X-Ray services are also available at home, offering mobility, speed, safety, and cost-effectiveness without requiring hospital visits."
    },
    {
      question: "Do you provide OPG (Orthopantomagram) scans for dental evaluation?",
      answer:
        "Yes. OPG scans provide a panoramic X-Ray of the upper and lower jaw, showing the number, position, and growth of all teeth, including those yet to erupt. It’s essential for dental assessments, orthodontic treatment planning, and detecting hidden dental issues."
    },
    {
      question: "Why is mammography important for early breast cancer detection?",
      answer:
        "Mammography uses low-dose X-rays to detect small growths before they can be felt. It’s a non-invasive process—no dyes, needles, or instruments required—and early detection significantly improves treatment outcomes."
    },
    {
      question: "What makes Neuberg’s ultrasound and color Doppler technology special?",
      answer:
        "We offer 4D ultrasound with advanced color Doppler for dynamic, real-time imaging that precisely locates pathology. Suitable for everything from pregnancy scans to complex organ assessments, it features extraordinary image clarity, Radiant System Architecture, excellent Doppler sensitivity, and sophisticated 3D/4D capabilities for fast and accurate diagnosis."
    },
    {
      question: "How do Neuberg’s imaging technologies improve overall patient care?",
      answer:
        "By combining MRI, CT, Digital X-Ray, OPG, Mammography, and Ultrasound with cutting-edge features like low-dose imaging, portable services, instant results, and advanced workflow systems, we enhance diagnostic accuracy, reduce patient discomfort, and improve overall care quality."
    },
    {
      question: "How fast will I get my report?",
      answer:
        "Most scan and test reports are available within 24 hours. For urgent cases, we offer priority reporting to deliver results in just a few hours."
    },
    {
      question: "Can I book radiology and blood tests together?",
      answer:
        "Yes. Neuberg Diagnostics allows you to combine radiology scans and lab tests in a single booking for your convenience, saving both time and travel."
    },
    {
      question: "Is home collection available?",
      answer:
        "Yes. We offer home sample collection for lab tests and portable X-Ray services for patients who cannot visit our centers."
    },
    {
      question: "How do I get my reports online?",
      answer:
        "Reports can be accessed securely through our online patient portal or via a secure link sent to your registered email/phone."
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes. We work with multiple insurance providers and can guide you through the process of claiming diagnostics costs where applicable."
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