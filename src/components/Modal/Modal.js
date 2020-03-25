import React, {useEffect,useState} from 'react';
import './Modal.css';
import {getDefinition} from '../../requests';

const Modal = ({word,changeWord}) => {
    const [definitions, setDefinitions] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const definition = await getDefinition(word);

            setDefinitions(definition);
        }

        fetchData();        
    }, [word])

    return (
        <div className="Modal">
            <h1 className="word">
                {word}
            </h1>
            {definitions.map((definition,index)=>(
                <p key={`definition-${index}`}>
                    {definition}
                </p>
            ))}
            <button className="button" type="button" onClick={changeWord}>
                Change Word
            </button>
        </div>
    );
};

export default Modal;