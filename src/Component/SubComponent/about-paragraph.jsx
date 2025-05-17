import { LangSelected_AboutMe_Paragraph } from '../../../public/js/lang';

import '../../css/mode.css';
import '../../css/aboutMe.css';

export function AboutParagraph ({ UIMode, LangMode }) {
    const paragraph = LangSelected_AboutMe_Paragraph(LangMode);
    
    return(
        paragraph.map((content, id) => (
            <p key={id} className={`color-${UIMode}-mode about-p`}>{content}</p>
        ))
    )
}