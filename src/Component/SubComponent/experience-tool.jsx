/* eslint-disable react/prop-types */
import { Tools_Experience } from '../../../public/js/lang';

import '../../css/mode.css';
import '../../css/experiencia.css';

export function ToolsExperience ({ UIMode, jobID }) {
    const toolsExperience = Tools_Experience(jobID);
    
    return (
        <div className='experience-container-tool'>
            {
                toolsExperience.map((tool, index) => (
                    <span key={index} className={`container-tool-name container-${UIMode}-mode`}>
                        {tool.name}
                    </span>
                ))
            }
        </div>
    );
    
}