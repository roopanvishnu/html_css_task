import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: 'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?cs=srgb&dl=pexels-pixabay-35600.jpg&fm=jpg'
    },
    {
      id: 2,
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: 'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?cs=srgb&dl=pexels-pixabay-35600.jpg&fm=jpg'
    },
    {
      id: 3,
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: 'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?cs=srgb&dl=pexels-pixabay-35600.jpg&fm=jpg'
    },
    
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row">
          {cardData.map(card => (
            <div key={card.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={card.imageUrl} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;