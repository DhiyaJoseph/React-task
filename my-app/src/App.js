import React from 'react';
import './App.css';
import image from './images/image1.png';
import image from './images/image2.png';
import image from './images/image3.png'
import image from './images/image4.png'

function App() {
  const handleCloseClick = () => {
    
    console.log('Close button clicked');
  };

  return (
    <div className="App">
      <div className="centered-content">
        <button className="close-button" onClick={handleCloseClick}>
          x
        </button>
        <p className="para1">
          Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.
        </p>
        <div>
          <img className="img1" src={image} alt="one" />
        </div>
        <p className='para2'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
      </div>
      <button>view website</button>
      <div className='logos'>
        <img className='img2' src={image} alt=''/>
        <img className='img3' src={image} alt=''/>
        <img className='img4' src={image} alt=''/>
      </div>
    </div>
  );
}

export default App;
