import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('Programing');
    const [results, setResults] = useState([]);
    const [debounceText, setDebounceText] = useState(term);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceText(setTerm);    
        
        },500);
        return () => {
            clearTimeout(timeoutId);
        }

    });

    useEffect(()=> { 
       const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format :'json',
                    srsearch : term,
                },
            });
            setResults(data.query.search);
        };

        search();
           
    }, [debounceText]);
       
    const renderdResult = results.map((result) => {

        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                <a  href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button" >GO</a>
                </div>
                <div className="content">
                    <div className="heder">
                        <h4>{result.title}</h4>
                    </div>
                    <div dangerouslySetInnerHTML = {{ __html : result.snippet }}/>
                </div>
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
            <label>Please enter the search term</label>
            <input 
            value={term}
            onChange={(e)=> setTerm(e.target.value)}
            className="input" />
            </div>
            <div className="ui celled list" >{renderdResult}</div>
        </div>
      
        
    );
};

export default Search;