
import {useState, createContext} from 'react';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import ImageSection from './Components/ImageSection';
import Followers from './Components/Followers';
import Details from './Components/Details';
import axios from 'axios';

export const ThemeContext=createContext('null');


function App() {

  const [theme, setTheme] = useState('light');
  const [userName,setUserName] = useState('');
  const [data, setData]=useState([]);
  const [result, setResult]=useState(true);
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const createdAt = data?.created_at?.split("T")[0].split("-");
 
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==='light'?'dark': 'light'));
  }

const changeHandler=(e)=>{
  setUserName(e.target.value);
}

const fetchData= async()=>{
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    setData(response.data)
    setResult(true);
  } catch (error) {
    console.log(error);
    setResult(false);
  }
}

const searchHandler= async(e)=>{
  e.preventDefault();
  await fetchData();
}


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme} style={{transition:'0.3s ease'}}>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <Searchbar setUserName={setUserName} searchHandler={searchHandler} changeHandler={changeHandler}
    result={result} setResult={setResult}/>
    <ImageSection createdAt={createdAt} data={data} months={months}/>
    <Followers data={data} theme={theme} toggleTheme={toggleTheme}/>
    <Details theme={theme} data={data}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;


