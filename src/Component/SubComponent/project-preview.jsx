/* eslint-disable react/prop-types */
import { Code_Project } from '../../../public/js/lang';

import '../../css/mode.css';
import '../../css/project.css';

export function ProjectPreview ({ UIMode, projectID }) {
    const previewProject = Code_Project(projectID);

    return(
        <div className='project-container-tool'>
            {
                previewProject.map((code, id) => (
                    <a key={id} className={`container-tools container-${UIMode}-mode hover-${UIMode}-mode`} href={code.path} target='_blank'>
                        <svg className={`tool-github fill-${UIMode}-mode`} xmlns='http://www.w3.org/2000/svg' viewBox={code.viewbox}>
                            <path d={code.svg}></path>
                        </svg>
                        <span>{code.title}</span>
                    </a>
                ))
            }
        </div>
    )
}