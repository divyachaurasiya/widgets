import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Convert = ({term,language}) => {

    const [convertedLanguage, setConvertedLanguage] = useState('');
    const [debouncingText, setDebouncingText] = useState(term);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncingText(term);
        },500);

        return () => {
            clearTimeout(timerId);
        }

    },[term]);

    useEffect(() => {
        const onLanguageChange = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params : {
                    q: debouncingText,
                    target:language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
          // console.log(data.data.translations[0].translatedText);
           setConvertedLanguage(data.data.translations[0].translatedText);
        }
       onLanguageChange();
    
    },[debouncingText, language]);

    return (
    <div><h3>{convertedLanguage}</h3></div>
    );

};

export default Convert;