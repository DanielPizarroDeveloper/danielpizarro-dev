/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { sendMail } from '../service/sendMail';
import { validationForm } from '../../public/js/validation';
import { LangSelected_ContactTitle, LangSelected_Contact, LangSelected_Contact_Notification, LangSelected_Contact_Validation } from '../../public/js/lang';

import '../css/mode.css';
import '../css/contact.css';

const Contact = ({ UIMode, LangMode, visibleContent }) => {
    const [displayName, setDisplayName] = useState('');
    const [mail, setMail] = useState('');
    const [body, setBody] = useState('');
    const [titleNotify, setTitleNotify] = useState(null);
    const [textNotify, setTextNotify] = useState(null);
    const [displayNotify, setDisplayNotify] = useState('display-none');

    const titleLanguage = LangSelected_ContactTitle(LangMode);
    const result = LangSelected_Contact(LangMode);
    const notificationData = LangSelected_Contact_Notification(LangMode);
    const validationData = LangSelected_Contact_Validation(LangMode);

    useEffect(() => {
    }, [displayName, mail, body]);


    const handlerClick_SendMail = (event) => {
        event.preventDefault();
        var formValidation = validationForm(setTitleNotify, setTextNotify, setDisplayNotify, validationData, displayName, mail, body);

        if(formValidation) {
            sendMail(notificationData, setTitleNotify, setTextNotify, setDisplayNotify, displayName, mail, body);
        }

        cleanFields();
    }

    const cleanFields = () => {
        setDisplayName('');
        setMail('');
        setBody('');
    }

    return( 
        <>
            {
                visibleContent == true && (
                    <header className={`header-contact display-${visibleContent}`}>
                        <section className='section-contact'>
                            <h1 className={`color-${UIMode}-mode`}>{titleLanguage}</h1>
                            <article className='article-contact'>
                                <svg className={`svg-contact fill-${UIMode}-mode`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                                    <path d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'></path>
                                </svg>
                            
                                <div className='vertical-line'></div>
                            
                                <div className='container-form'>
                                    <div className={`container-notification ${displayNotify}`}>
                                        <h4 id='notification-text1'>{titleNotify}</h4>
                                        <h5 id='notification-text2'>{textNotify}</h5>
                                    </div>

                                    <h2 className={`color-${UIMode}-mode`}>{result[0].title}</h2>
                                    <h3 className={`color-${UIMode}-mode`}>{result[0].subTitle}</h3>
                            
                                    <form onSubmit={handlerClick_SendMail} action="POST">
                                    <div className='forms-input'>
                                        <input className={`input-${UIMode}-mode`} type='text' name='displayName' placeholder='Daniel Pizarro Saavedra' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                                        <input className={`input-${UIMode}-mode`} type='text' name='mail' placeholder='Saavedra.Alejandro@outlook.com' value={mail} onChange={(e) => setMail(e.target.value)} />
                                        <textarea className={`input-${UIMode}-mode`} name='body' placeholder={result[0].placeholder}  value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                                        <button className={`form-submit button-${UIMode}-mode`}>{result[0].textButton}</button>
                                    </div>
                                    </form>
                                </div>
                            </article>
                        </section>
                    </header>
                )
            }
        </>
    )
}

export default Contact;