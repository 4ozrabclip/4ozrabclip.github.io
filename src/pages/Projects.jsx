import React from 'react';
import RightProjects from './RightProjects.jsx'
import LeftProjects from './LeftProjects.jsx'

function Projects() {

    return (
        <div className='container'>
            <LeftProjects/>
            <RightProjects/>
        </div>
    );
}

export default Projects;