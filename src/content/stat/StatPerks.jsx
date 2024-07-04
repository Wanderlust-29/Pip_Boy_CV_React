import "./StatPerks.css"
import { useState } from 'react';
function StatPerks() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const attributes = [
    { name: 'Logique'},
    { name: 'Rigoureux'},
    { name: 'Curieux'},
  ];

  return (
    <div className='perks'>
      <div className="special-left-column">
        {attributes.map((attribute, index) => (
          <div
            key={index}
            className={`attribute ${activeIndex === index ? 'box-active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <p>{attribute.name}</p>
          </div>
        ))}
      </div>
      <div className='special-right-column'>
        {/* {images.map((image, index) => (
          <div key={index} className={`special-attribute-container ${activeIndex === index ? 'active' : ''}`}>
            <img
              className={`special-attribute-image ${activeIndex === index ? 'active' : ''}`}
              src={image}
              alt={`a fallout vault boy gif representing the ${attributes[index].name} special attribute`}
            />
            <p className={`special-attribute-description ${activeIndex === index ? 'active' : ''}`}>
              {descriptions[index]}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default StatPerks;
