
import React,{ useState } from 'react';
import './App.css';
import UseState from './components/UseState';

export const ChangeTheme = React.createContext()

function App() {
  const[theme,setTheme]=useState(true)
const handleToggle=()=>{
  if(theme===true){
    setTheme(false)
  }
  else{
    setTheme(true)
  }
}

  return (
    <ChangeTheme.Provider value={theme}>
      <div style={{display:"flex",justifyContent:"center"}}>
      <button onClick={handleToggle}>Change Theme</button>
      </div>
      <UseState/>
    </ChangeTheme.Provider>
  );
}

export default App;