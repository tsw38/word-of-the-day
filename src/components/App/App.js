import React,{useState} from 'react';
import './App.css';
import words from '../../allEnglishWords';
import Modal from '../Modal/Modal';

const App = () => {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);

  const changeWord = () => {
    setWord(words[Math.floor(Math.random() * words.length)])
  }

  return (
    <div className="App">
      <Modal 
        word={word}
        changeWord={changeWord}
      />
    </div>
  );
}

export default App;
