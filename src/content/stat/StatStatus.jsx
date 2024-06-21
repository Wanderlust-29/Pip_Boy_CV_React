import vaultBoy from '../../assets/vault_boy_walking.gif';
import php from '../../assets/php.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import git from '../../assets/git.svg';
import python from '../../assets/python.svg';
import js from '../../assets/js.svg';
import react from '../../assets/react.svg';
import wordpress from '../../assets/wordpress.svg';
import './StatStatus.css';

function StatStatus() {
  return (
    <div className='status'>
      <div className='vaultboy'>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
        <img src={vaultBoy} alt="vault boy walking" />
      </div>
      <div className='skills'>
        <div className='php'><img src={php} alt="logo php" /></div>
        <div className='html'><img src={html} alt="logo html"/></div>
        <div className='css'><img src={css} alt="logo css"/></div>
        <div className='js'><img src={js} alt="logo js"/></div>
        <div className='react'><img src={react} alt="logo react"/></div>
        <div className='git'><img src={git} alt="logo git"/></div>
        <div className='python'><img src={python} alt="logo python"/></div>
        <div className='wordpress'><img src={wordpress} alt="logo wordpress"/></div>
      </div>
      <p>Ryan Roudaut : Développeur Web</p>
    </div>
  );
}

export default StatStatus;