import { useState } from 'react';
import sup from './support.module.css';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

import { Link } from 'react-router-dom';

const faqData = [
  {
    question: "How can I track the status of a loan application?",
    answer: "To track the status of a loan application, access the New Applications name or page and choose or search for the applicant's name or Loan ID. The app will display the current stage of the application such as 'Pending', 'Docs. Reviewed', and 'Incomplete docs.'",
  },
  {
    question: "What documents are typically required for loan processing?",
    answer: "The documents required for loan processing vary depending on the loan type. However, common documents include identification proof, income statements, bank statements, employment verification, and collateral documentation (when applicable). You can access these files in the Document's sub-page under your client's information overview.",
  },
  {
    question: "What happens if a borrower misses a loan repayment?",
    answer: "If a borrower misses a loan repayment, it is essential to follow established collection procedures. Loan officers should access the due loans page to view overdue loans, send reminders via messages or email their clients, and initiate appropriate actions based on the institution's policies. It is crucial to maintain clear communication with borrowers to resolve any payment issues promptly.",
  },
  {
    question: "What should I do if I encounter a technical issue on the app?",
    answer: "You can reach out to the app's support team for assistance by calling the toll-free number on the support page or typing and sending a report from the support page. Describe the issue you are facing, providing any relevant details needed, and the support team will guide you through the resolution process.",
  },
];

export default function Faq () {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setActiveIcon(null);
    } else {
      setActiveIndex(index);
      setActiveIcon(index);
    }
  };

  return (
    <div>
    <div className={sup.supportNav}>
    <Link to='/dashboard'>Home</Link>
    <BiChevronRight className={sup.icon}/>
    <Link to='/support'>Support</Link>
    <BiChevronRight className={sup.icon} />
    <Link to='#'>FAQs</Link>
   </div>
      <div className={sup.support__faq__block}>
        <h5 style={{fontWeight: 700, fontSize: 16,}}>FAQs</h5>
        {faqData.map((item, index) => (
          <div key={index} className={sup.support__faq_cell}>
            <div className={sup.support__faq_question}>
              {item.question}
              <BiChevronDown
                onClick={() => toggleAnswer(index)}
                className={
                  activeIcon === index
                    ? `${sup.support__question_icon} ${sup.active}`
                    : sup.support__question_icon
                }
              />
            </div>
            <div className={sup.support__cell__faq_answer_block}>
              {activeIndex === index && (
                <div className={sup.support__faq_answer}>{item.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
