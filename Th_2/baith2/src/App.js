import logo from './logo.svg';
import './App.css';
import useState from 'react'
import style from "./styles.module.css";
function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };
  // const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <h2 style={{
        color:  (numClicked % 2 === 0) ? 'blue' : 'red'
}}   >You clicked {numClicked} times</h2> 
    </div>
  );
}

export default App;
