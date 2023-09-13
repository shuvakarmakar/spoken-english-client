import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs = () => {
  const faqs: FAQ[] = [
    {
      question: "How can I pay for my appointment?",
      answer: "Lorem ipsum dolor sit amet...",
    },
    {
      question: "What can I expect at my first consultation?",
      answer: "Lorem ipsum dolor sit amet...",
    },
    // Add more FAQs here
  ];

  const FAQItem: React.FC<FAQ> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[96%] md:[90%] mx-auto">
        <button
          className="flex items-center justify-between w-full p-4 focus:outline-none darkText"
          onClick={toggleAccordion}
        >
          <h2 className="text-xl font-semibold text-gray-800">{question}</h2>
          {isOpen ? (
            <FaMinus className="text-xl text-blue-500" />
          ) : (
            <FaPlus className="text-xl text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div className="p-4 darkText">
            <p className="text-gray-600">{answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#eeeeee] py-5 changebg">
      <Helmet>
        <title>FAQ's</title>
      </Helmet>
      <div className="mx-auto w-[96%] md:w-[90%]">
        <section className="bg-gray-100 py-12 px-4 cardbg">
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8 darkText">
              Frequently Asked Questions
            </h1>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
