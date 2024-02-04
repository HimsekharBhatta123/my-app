import React,{ useState } from 'react';
// import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter, 
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";
function App() {
  const [alert,setAlert]=useState(null)
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
    }

  const [mode, setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  const [mode2,setMode2]=useState('light')
  const toggleMode2=()=>{
    if(mode2==='light'){
      setMode2('success')
      document.body.style.backgroundColor='#5cdc5c'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode2('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")

    }
  }
  return (
   <>
      {/* <BrowserRouter> */}
          <Navbar title="MY-APP"  home="HOME" mode={mode} toggleMode={toggleMode} mode2={mode2} toggleMode2={toggleMode2}/>
          <div className="container my-3">
            <Alert alert={alert}/>
            <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} mode2={mode2}/>
              {/* <Routes>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} mode2={mode2}/>}/> 
              </Routes> */}
          </div>
      {/* </BrowserRouter> */}
   </>
  );
  
}

export default App;
