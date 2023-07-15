import React, { useState, useEffect } from 'react';
import lottie from 'lottie-web';
import juni from './animation_lk2erqxh.json'

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

return(
  <>
  <div id="juni" style={{width:"300px"}}></div>
  </>
)

}

export default Juni;