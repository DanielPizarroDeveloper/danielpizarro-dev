import menuData from '../../src/mocks/menu.json';
import homeData from '../../src/mocks/home.json';
import skillData from '../../src/mocks/skill.json';
import aboutData from '../../src/mocks/aboutme.json';
import contactData from '../../src/mocks/contact.json';
import projectData from '../../src/mocks/project.json';
import experienceData from '../../src/mocks/experience.json';

const LangSelected_Home = (LangMode) => {
    const translation = homeData.translations.find(t => t.lang === LangMode);
    
    const homeLang = {
        photo: homeData.image,
        displayName: homeData.title,
        position: translation.content.Position,
        seekJob: translation.content.seekJob
    }

    return homeLang;
}

const LangSelected_Menu = (LangMode) => {

    const menuLang = menuData.translations.find(t => t.lang === LangMode);
    return menuLang;
}

const LangOptions_Menu = (menuData, IUTheme) => {
    const optionLang = menuData.mode.find(t => t.theme === IUTheme);
    return optionLang;
}

const LangSelected_Experience = (LangMode) => {
    const experienceLang = experienceData.map(item => ({id: item.id, content: item.translations.find(t => t.lang === LangMode) }));
    return experienceLang;
}

const LangSelected_ExperienceTitle = (LangMode) => {
    const titleExperience = experienceData.flatMap(item => item.translations.find(t => t.lang === LangMode).webiste.webTitle);
    return titleExperience[0];
}

const Tools_Experience = (jobID) => {
    const experience = experienceData.find(exp => exp.id === jobID);
    return experience.tools;
}

const LangSelected_Project = (LangMode) => {
    const projectLang =  projectData.map(item => ({id: item.id, titleProject: item.title, imageProject: item.image, content: item.translations.find(t => t.lang === LangMode)}));
    return projectLang;
}

const LangSelected_ProjectTitle = (LangMode) => {
    const titleProject = projectData.flatMap(item => item.translations.find(t => t.lang === LangMode).webiste.webTitle);
    return titleProject[0];
}

const Tools_Project = (projectID) => {
    const projectLang = projectData.find(tool => tool.id === projectID);
    return projectLang.tools;
}

const Code_Project = (projectID) => {
    const projectLang = projectData.find(code => code.id === projectID);
    return projectLang.code;
}

const LangSelected_SkillTitle = (LangMode) => {
    const skillLang = skillData.flatMap(item => item.translations.find(t => t.lang === LangMode).webiste.webTitle);
    return skillLang[0];
}

const LangSelected_AboutMe = (LangMode) => {
    const aboutLang = aboutData
        .map(item => ({id: item.id, photo: item.pathImage, 
            titleButton: item.translations.find(t => t.lang === LangMode).titleButton, 
            pathResume: item.translations.find(t => t.lang === LangMode).pathResume}));
    return aboutLang;
}

const LangSelected_AboutTitle = (LangMode) => {
    const titleAboutMe= aboutData.flatMap(item => item.translations.find(t => t.lang === LangMode).webiste.webTitle);
    return titleAboutMe[0];
}

const LangSelected_AboutMe_Paragraph = (LangMode) => {
    return aboutData
        .flatMap(item => {
            const translation = item.translations.find(t => t.lang === LangMode);
            return translation ? translation.paragraph.map(p => p.parrafo) : [];
        });
}

const LangSelected_Contact = (LangMode) => {
    const contactLang = contactData.flatMap(item => item.translations.find(t => t.lang === LangMode).content);
    return contactLang;
}

const LangSelected_ContactTitle = (LangMode) => {
    const contactLang = contactData.flatMap(item => item.translations.find(t => t.lang === LangMode).webiste.webTitle);
    return contactLang[0];
}

const LangSelected_Contact_Notification = (LangMode) => {
    const contactLang = contactData.flatMap(item => item.translations.find(t => t.lang === LangMode).notification);
    return contactLang;
}

const LangSelected_Contact_Validation = (LangMode) => {
    const validationLang = contactData.flatMap(item => item.translations.find(t => t.lang === LangMode).validation);
    return validationLang;
}


export { 
    LangSelected_Home, 
    LangSelected_Menu, 
    LangOptions_Menu, 
    LangSelected_Experience,
    LangSelected_ExperienceTitle,
    Tools_Experience,
    LangSelected_Project,
    LangSelected_ProjectTitle,
    Tools_Project,
    Code_Project,
    LangSelected_SkillTitle,
    LangSelected_AboutMe,
    LangSelected_AboutTitle,
    LangSelected_AboutMe_Paragraph,
    LangSelected_Contact,
    LangSelected_ContactTitle,
    LangSelected_Contact_Notification,
    LangSelected_Contact_Validation
}