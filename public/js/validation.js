export const validationForm = (setTitleNotify, setTextNotify, setDisplayNotify, validationData, displayName, mail, body) => {
    if(displayName.trim().length != 0 && mail.trim().length != 0 && body.trim().length != 0) {
            return true;
    }
    else {
        setMessage(validationData, setTitleNotify, setTextNotify, setDisplayNotify);
        autoHide(setDisplayNotify);
        return false;
    }
}

const setMessage = (validationData, setTitleNotify, setTextNotify, setDisplayNotify) => {
    setTitleNotify(validationData[0].titleValidation);
    setTextNotify(validationData[0].textValidation); 
    setDisplayNotify('display-none warning scale-up-center');
}

//Método que aplica la animación de ocultar la notificación.
const autoHide = (setDisplayNotify) => {
    setTimeout(() => {
        setDisplayNotify('scale-down-center');
        setTimeout(() => {
            setDisplayNotify('display-block-important');
        }, 500);
    }, 5000);
}