import React, { useState } from 'react';
import './accordionComp.css';
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? <FaTimes style={{fontSize:"25px"}}/> : <FaPlus style={{fontSize:"25px"}}/>}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
