import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
];

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
    const [term , setTerm] = useState('');

    return (
    <div>
        <div className="ui segment">
        <div className="ui form">
            <div className="field">
                <label className="label">Enter text</label>
                <input className="input"
                value = {term}
                onChange={(e) => setTerm(e.target.value)} 
                />
            </div>
        </div>
        <Dropdown options={options} selectedText={selectedLanguage} onSelectedText={setSelectedLanguage} />
        <h2 className="ui header">Output</h2>
        <Convert term={term} language={selectedLanguage} />
       </div> 
    </div>
    );
};

export default Translate;