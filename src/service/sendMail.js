const MAIL_ENDPOINT_ACTIVATE = import.meta.env.VITE_ENDPOINT_ACTIVATE;
const MAIL_ENDPOINT = import.meta.env.VITE_ENDPOINT_MAIL;

//Método que activa la API si esta deshabilitada
export const ActivateAPI = async(setStatusAPI) => {
    const response = await fetch(MAIL_ENDPOINT_ACTIVATE);
    if(response.status == 200) {
        setStatusAPI(true);
        console.log('Flag OK');
    }
    else {
        setStatusAPI(false);
        console.log('Flag Error');
    }
}

//Método que consume una API que envia un correo
export const sendMail = async (notificationData, setTitleNotify, setTextNotify, setDisplayNotify, displayName, mailUser, bodyText) => {
    const contentAPI = {
        to: mailUser,
        displayName: displayName,
        text: bodyText
    };

    fetch(MAIL_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contentAPI)
    })
    .then(response => response.json())
    .then(
        setTitleNotify(notificationData[0].successTitleNotification),
        setTextNotify(notificationData[0].successTextNotificacion),
        setDisplayNotify('display-none success scale-up-center')) 
    .catch(error => {  
        setTitleNotify(notificationData[0].warningTitleNotification),
        setTextNotify(notificationData[0].warningTextNotificacion), 
        setDisplayNotify('display-none warning scale-up-center'),
        console.log(error)
    });

    autoHide(setDisplayNotify);
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