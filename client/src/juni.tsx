import React, { useState, useEffect } from 'react';
import lottie from 'lottie-web';
import juni from './naver.json'

const Juni = () => {
  // const juniRef = useRef<HTMLDivElement>(null);
const juniTest = document.querySelector('#juni');
const [togle, setTogle] = useState(true);

  useEffect(() => {
    if (juniTest) {
      lottie.loadAnimation({
        container: juniTest,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: juni 
      } );


    }
  },[juniTest]);

  const handleClick = () => {
    window.open('https://blog.naver.com/sag7002', '_blank');
  };

return(
  <>
  <div id="juni" style={{width:"200px" ,height:"170px", cursor: "pointer"}} onClick={handleClick}></div>
  </>
)

}

export default Juni;