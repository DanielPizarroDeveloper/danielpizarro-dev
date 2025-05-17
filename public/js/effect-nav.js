const nav_effect_title = (websiteCurrently, setStyleSelectedExperience, setStyleSelectedProject, setStyleSelectedSkill, setStyleSelectedAboutMe, setStyleSelectedContact, setStyleSelectedHome) => {
    switch (websiteCurrently) {
        case '/experience':
          setStyleSelectedExperience('nav-li-active');
          setStyleSelectedProject('nav-li-inactive');
          setStyleSelectedSkill('nav-li-inactive');
          setStyleSelectedAboutMe('nav-li-inactive');
          setStyleSelectedContact('nav-li-inactive');
          setStyleSelectedHome('nav-li-inactive');
          break;
  
        case '/project':
          setStyleSelectedExperience('nav-li-inactive');
          setStyleSelectedProject('nav-li-active');
          setStyleSelectedSkill('nav-li-inactive');
          setStyleSelectedAboutMe('nav-li-inactive');
          setStyleSelectedContact('nav-li-inactive');
          setStyleSelectedHome('nav-li-inactive');
          break;
  
        case '/skill':
          setStyleSelectedExperience('nav-li-inactive');
          setStyleSelectedProject('nav-li-inactive');
          setStyleSelectedSkill('nav-li-active');
          setStyleSelectedAboutMe('nav-li-inactive');
          setStyleSelectedContact('nav-li-inactive');
          setStyleSelectedHome('nav-li-inactive');
          break;
  
        case '/aboutMe':
          setStyleSelectedExperience('nav-li-inactive');
          setStyleSelectedProject('nav-li-inactive');
          setStyleSelectedSkill('nav-li-inactive');
          setStyleSelectedAboutMe('nav-li-active');
          setStyleSelectedContact('nav-li-inactive');
          setStyleSelectedHome('nav-li-inactive');
          break;
  
        case '/contact':
          setStyleSelectedExperience('nav-li-inactive');
          setStyleSelectedProject('nav-li-inactive');
          setStyleSelectedSkill('nav-li-inactive');
          setStyleSelectedAboutMe('nav-li-inactive');
          setStyleSelectedContact('nav-li-active');
          setStyleSelectedHome('nav-li-inactive');
          break;
      
        default:
          setStyleSelectedExperience('nav-li-inactive');
          setStyleSelectedProject('nav-li-inactive');
          setStyleSelectedSkill('nav-li-inactive');
          setStyleSelectedAboutMe('nav-li-inactive');
          setStyleSelectedContact('nav-li-inactive');
          setStyleSelectedHome('nav-li-active');
          break;
    }
}

export { nav_effect_title };