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
  const [activeIndex, setActiveIndex] = useState(0);

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
  const descriptions = [
    `Juste assez pour cliquer sur ENTER et envoyer un git push --force plus destructeur qu'une patate de forain.`,
    `Capable de débusquer ses propres bugs presque aussi vite qu'il ne les implémente.`,
    `Peut coder pendant plus de 6 heures et 12 canettes de boisson énergisante de suite.`,
    `Trop juste pour clamer "It's not a bug, it's a feature" tout en restant crédible, préfère coder proprement.`,
    `Comprend ses copy/paste de Stack Overflow... enfin, c'est ce qu'il dit.`,
    `Tombe parfois de sa chaise, mais retrouve toujours son poste de travail.`,
    `N'a grillé aucun CPU depuis plus d'un an.`
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
        ))}
      </div>
    </div>
  );
}

export default StatSpecial;
