import { useState } from 'react';
import './StatSpecial.css';
import strength from '../../assets/strength.gif';
import perception from '../../assets/perception.gif';
import endurance from '../../assets/endurance.gif';
import charisma from '../../assets/charisma.gif';
import intelligence from '../../assets/intelligence.gif';
import agility from '../../assets/agility.gif';
import luck from '../../assets/luck.gif';

function StatSpecial() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const attributes = [
    { name: 'Strength', value: 3 },
    { name: 'Perception', value: 7 },
    { name: 'Endurance', value: 9 },
    { name: 'Charisma', value: 4 },
    { name: 'Intelligence', value: 7 },
    { name: 'Agility', value: 3 },
    { name: 'Luck', value: 6 },
  ];

  const images = [
    strength,
    perception,
    endurance,
    charisma,
    intelligence,
    agility,
    luck,
  ];

  return (
    <div className='special'>
      <div className="special-left-column">
        {attributes.map((attribute, index) => (
          <div
            key={index}
            className={`attribute ${activeIndex === index ? 'box-active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <p>{attribute.name}</p>
            <p>{attribute.value}</p>
          </div>
        ))}
      </div>
      <div className='special-right-column'>
        {images.map((image, index) => (
          <img
            key={index}
            className={`special-attribute-image ${activeIndex === index ? 'active' : ''}`}
            src={image}
            alt={`a fallout vault boy gif representing the ${attributes[index].name} special attribute`}
          />
        ))}
      </div>
    </div>
  );
}

export default StatSpecial;
