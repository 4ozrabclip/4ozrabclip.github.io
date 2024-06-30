import React from 'react';
import texasRedLogo from 'src/pages/img/TexasRedMenu.PNG';  

function Projects() {
    const openInNewWindow = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className='container'>
            <nav>
                <ul className='proj-list'>
                    <li>
                        <div className="proj-card">
                            <img className="proj-img" src={texasRedLogo} alt="TexasRed Logo" />
                            <div className="proj-content">
                                <h2>TexasRed</h2>
                                <p className='proj-desc'>Pentesting multitool</p>
                                <button className="proj-button" onClick={() => openInNewWindow("https://github.com/4ozrabclip/TexasRed")}>
                                    View on GitHub
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Projects;