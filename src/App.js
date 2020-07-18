import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items = [
    {   
        title: 'What is React?',
        content: 'React is the frontend javascript framework'
    },
    {
        title: 'Why use React?',
        content : 'React is a favorite js liberary among engineer'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating component'
    }
];

const option = [
    {
        label : 'The text is red',
        value : 'red'
    },
    {
        label : 'Ball is blue',
        value: 'blue'
    },
    {
        label : 'Bord is white',
        value : 'white'
    }
]

export default () => {
    const [selectText, setSelectedText]= useState(option[0]);

    return (
        <div>
            <Header />
            <Route path='/' >
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown options={option} selectedText={selectText} onSelectedText={setSelectedText} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route> 
        </div>
    );
};
