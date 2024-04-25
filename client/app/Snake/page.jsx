"use client"
import "./game.css"
import { useEffect } from "react";
const Snake=()=>{
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
          // Trigger your <a> tag action here
          console.log('Enter key pressed, triggering link...');
          // For example, if you want to click an <a> tag with id "myLink"
          document.getElementById('myLink').click();
        }
      };
    
      useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
        return () => {
          document.removeEventListener('keyup', handleKeyUp);
        };
      }, []);
    return(
        <div className="body123">
    <a id="myLink" href="/Snake/snakegame"></a>       
    <div className="text123">PRESS ENTER TO START</div> 
    </div>
    );
}

export default Snake;