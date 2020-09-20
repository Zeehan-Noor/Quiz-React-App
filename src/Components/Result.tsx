import React from 'react';
import './Result.css';
const ResultCard: React.FC<any> = ({ Score }) => {

    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <div className="video-container">
        <video src="/video/video-1.mp4"  autoPlay loop muted />
        <div className="container">
            <div className="header">
                <h1>Final Score
               <br/> {Score} out of 10</h1>
            </div>
            <input type="submit" value="Let's Play Again" onClick={refreshPage} className="Button"/>
        
        </div>
        </div>
    )
}

export default ResultCard;

  
 