import "./Map.css"
import map from '../../assets/image0.png';
import location from '../../assets/location.svg';

function Map() {

    return (
      <>
      <div className='map'>
        <img src={map} alt="Finistère" /> 
        <div className='landmark'>
          <img src={location} alt="Localisation" /> 
        </div>
      </div>
      
  
      </>
    )
  }
  
  export default Map
  