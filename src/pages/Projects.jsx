import Todo from './projects/Todo.jsx';

import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

  

function Projects(){
    return(
        <div className='container'>
            <nav>
                <ul className='proj-list'>
                    <li>
                        <Link to="/todo">
                            <button className="proj-button">
                                <h2>Todo list</h2>
                                <p className='proj-desc'>basic todo app with dnd functionality</p>
                            </button>
                        </Link>
                    </li>
                    
                </ul>
            </nav>

        <Routes>
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
        </div>
    );
}
export default Projects