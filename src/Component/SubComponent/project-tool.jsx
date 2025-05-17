/* eslint-disable react/prop-types */
import { Tools_Project } from '../../../public/js/lang';

import '../../css/mode.css';
import '../../css/project.css';

export function ProjectTools ({ UIMode, projectID }) {
    const toolslArray = Tools_Project(projectID);

    return(
        <div className='project-container-tool'>
            {
                toolslArray.map((tool, id) => (
                    <span key={id} className={`container-tool-name container-${UIMode}-mode`}>{tool.name}</span>
                ))
            }
        </div>
    )
}