import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: 'Tab 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultricies accumsan. Cras commodo consectetur arcu, nec sodales dolor facilisis non. Proin ornare metus sed risus fringilla, vel lobortis quam pellentesque.'
    },
    {
      title: 'Tab 2',
      content: 'Suspendisse potenti. Vivamus efficitur magna sit amet dui dignissim, nec luctus orci faucibus. Nam gravida velit sed arcu fringilla, at posuere eros ultrices. Nullam non ornare magna. Vestibulum ante ipsum primis in faucibus.'
    },
    {
      title: 'Tab 3',
      content: 'Fusce eget magna sed magna facilisis mollis. Nulla facilisi. In hac habitasse platea dictumst. Sed vitae justo euismod, fermentum tortor eget, elementum nisl. Nulla facilisi. Ut tempor lobortis lobortis. Pellentesque id neque vel orci porttitor semper.'
    }
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        
        <div className="card">
          <div className="card-header bg-white p-0">
            <ul className="nav nav-tabs card-header-tabs">
              {tabContent.map((tab, index) => (
                <li className="nav-item" key={index}>
                  <button 
                    className={`nav-link ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="card-body">
            {tabContent.map((tab, index) => (
              <div 
                key={index}
                className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
              >
                <h4 className="card-title mb-3">{tab.title}</h4>
                <p className="card-text">{tab.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;