import React from 'react';

import oneOutsNeonPulse from './/img/oneOutsNeonPulse.png';  
function LeftProjects() {
    const openInNewWindow = (url) => {
        window.open(url, "_blank");
    };
  return (
    <div className="left-proj">
        <div className="row-title">Games</div>
        <div className="proj-card">
            <nav>
                <img className="proj-img" src={oneOutsNeonPulse} alt="OONP Logo" />
                    <div className="proj-content">
                        <h2>OneOutsNeonPulse</h2>
                            <p className='proj-desc'>VR cyberpunk boxing game<br/><br/>
                            In OneOutsNeonPulse you are spawned on a fight ring floating above a neon-cityscape, facing a pro-fighter robot.<br/><br/>
                            Music and art by DJ Cannibal and myself
                            </p>
                                <button className="proj-button" onClick={() => openInNewWindow("https://itch.io/profile/4ozmane")}>
                                        View on Itch.IO
                                </button>
                    </div>
                </nav>
        </div>
    </div>
  );
}

export default LeftProjects;