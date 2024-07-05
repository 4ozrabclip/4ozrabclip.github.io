import React from 'react';
import texasRedLogo from './/img/TexasRedLogo.PNG';  

function RightProjects() {
    const openInNewWindow = (url) => {
        window.open(url, "_blank");
    };
  return (
    <div className="right-proj">
    <div className="row-title">Cybersecurity/dev</div>
        <div className="proj-card">
            <nav>
                <img className="proj-img" src={texasRedLogo} alt="TexasRed Logo" />
                    <div className="proj-content">
                        <h2>TexasRed</h2>
                            <p className='proj-desc'>TexasRed is a versatile pentesting multi-tool. <br/><br/>Consists of: <br/><br/>- TCP client generator with seamless configuration<br/>- HTTP flooder framed as an anti-phishing tool to obfuscate data</p>
                                <button className="proj-button" onClick={() => openInNewWindow("https://github.com/4ozrabclip/TexasRed")}>
                                        View on GitHub
                                </button>
                    </div>
            </nav>
        </div>
    </div>
  );
}

export default RightProjects;