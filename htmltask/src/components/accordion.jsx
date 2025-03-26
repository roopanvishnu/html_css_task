import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const accordionItems = [
    {
      id: 1,
      title: 'Question 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolores recusandae soluta, eius placeat minus totam inventore repellat assumenda saepe, magni, explicabo iusto. Est, architecto! Quo, similique. Aperiam, ipsum quas.'
    },
    {
      id: 2,
      title: 'Question 2',
      content: 'Lorem ipsum dolor, sit amet sdfasdfconsectetur adipisicing elit. Atque dolores recusandae soluta, eius placeat minus totam inventore repellat assumenda saepe, magni, explicabo iusto. Est, architecto! Quo, similique. Aperiam, ipsum quas.'
    },
    {
      id: 3,
      title: 'Question 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolores recusandae soluta, eius placeat minus totam inventore repellat assumenda saepe, magni, explicabo iusto. Est, architecto! Quo, similique. Aperiam, ipsum quas.'
    },
  ];
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        
        <div className="accordion" id="accordionExample">
          {accordionItems.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button 
                  className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                  type="button" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`collapse${item.id}`}
                >
                  {item.title}
                </button>
              </h2>
              <div 
                id={`collapse${item.id}`} 
                className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                aria-labelledby={`heading${item.id}`}
              >
                <div className="accordion-body">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;