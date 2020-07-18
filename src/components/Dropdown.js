import React, {useState,useEffect,useRef} from 'react';

const Dropdown = ({options,selectedText,onSelectedText}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click',onBodyClick);
        }

    },[]);  

    const renderOption = options.map((option) => {
        if(option.label === selectedText.label) {
            return '';
        }
        return (
            <div onClick={() => onSelectedText(option)} key={option.value} className="item">
                {option.label}
            </div>
        );

    });
    
    return (
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">Select a color</label>
            <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${ open ? 'visible active' :'' }`} >
               <i className="dropdown icon"></i> 
               <div className="text">{selectedText.label}</div>
               <div className={`menu ${open ? 'visible transition':''}`} >
                   {renderOption}
               </div>
            </div>
        </div>
    </div>
    );
};

export default Dropdown;