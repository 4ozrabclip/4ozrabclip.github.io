import React from 'react';

function RightBody() {
  return (
    <div className="right-body">
        <div className="card">
            <iframe
            title='ytc ferg - new heights'
            width="653"
            height="400"
            src={`https://www.youtube.com/embed/cdCYnKUEvS8`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </div>
        <div className="card">
            <iframe
            title='cha le '
            width="653"
            height="400"
            src={`https://www.youtube.com/embed/Na1YKhIttP4`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </div>
        <div className="card">
            <iframe
            title='mako - aimbot'
            width="653"
            height="400"
            src={`https://www.youtube.com/embed/RwrosIzGSU4`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </div>
        <div className="card">
            <iframe
            title='mako - aimbot'
            width="653"
            height="400"
            src={`https://www.youtube.com/embed/QVQoZblT_0s`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </div>
    </div>
  );
}

export default RightBody;