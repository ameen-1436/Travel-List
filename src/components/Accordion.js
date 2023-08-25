import "../accordian.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function Accordian() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <AccordianItem
          question={item.title}
          num={i}
          key={item.title}
          text={item.text}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />

      ))}
    </div>
  );
}
const AccordianItem = ({ question, num, text, curOpen, onOpen }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    return onOpen(isOpen? null: num);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number"> {num > 9 ? `0${num + 1}` : `${num + 1}`} </p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box ul">{text}</div>}
    </div>
  );
};
