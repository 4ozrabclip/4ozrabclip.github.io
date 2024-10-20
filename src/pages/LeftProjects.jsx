import React from 'react';

import oneOutsNeonPulse from './/img/oneOutsNeonPulse.png';  
import neonPulseArcade from './/img/NeonPulseArcadeBanner.png';
import neonPulseDarkness from './/img/npdBanner.png';
function LeftProjects() {
    const openInNewWindow = (url) => {
        window.open(url, "_blank");
    };
  return (
    <div className="left-proj">
        <div className="row-title">Games</div>
        <div className="proj-card">
                <nav>
                    <img className="proj-img" src={neonPulseDarkness} alt="NPD Logo" />
                        <div className="proj-content">
                            <h2>NeonPulse: Darkness</h2>
                                <p className='proj-desc'>Dreamy maze game in the dark<br/><br/>
                                    In NeonPulse: Darkness you are placed into a dream-simulation maze, where you must 
                                    traverse the map and gain spatial awareness using limited lighting tools.
                                </p>
                                    <button className="proj-button" onClick={() => openInNewWindow("https://4ozmane.itch.io/neonpulse-darkness")}>
                                            View on Itch.IO
                                    </button>
                        </div>
                </nav>
            </div>
            <div className="proj-card">
                <nav>
                    <img className="proj-img" src={neonPulseArcade} alt="NP arcade Logo" />
                        <div className="proj-content">
                            <h2>NeonPulse: Arcade</h2>
                                <p className='proj-desc'>Arcade style dungeon crawler<br/><br/>
                                    In NeonPulse: Arcade you are crawling through rave dungeon mazes,
                                    tasked with fighting enemys and taking stims. Developed in C++.
                                    Featuring all local NZ underground rap and electronic music
                                </p>
                                    <button className="proj-button" onClick={() => openInNewWindow("https://4ozmane.itch.io/neonpulse-arcade")}>
                                            View on Itch.IO
                                    </button>
                        </div>
                </nav>
            </div>

            <div className="proj-card">
                <nav>
                    <img className="proj-img" src={oneOutsNeonPulse} alt="OONP Logo" />
                        <div className="proj-content">
                            <h2>OneOutsNeonPulse</h2>
                                <p className='proj-desc'>VR cyberpunk boxing game<br/><br/>
                                In OneOutsNeonPulse you are spawned on a fight ring floating above a neon-cityscape, facing a pro-fighter robot.<br/><br/>
                                Music and art by DJ Cannibal and myself
                                </p>
                                <button className="proj-button" onClick={() => openInNewWindow("https://4ozmane.itch.io/one-outs-neon-pulse")}>
                                        View on Itch.IO
                                </button>
                        </div>
                    </nav>
            </div>
    </div>
  );
}

export default LeftProjects;