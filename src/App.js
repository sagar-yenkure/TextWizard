
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
  //state hook for darkmode
  const [dkmode, setdkmode] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const [dktext, setdktext] = useState("switch to darkmode")   // use state of dk text
  const dkbutton = () => {
    if (dkmode.color === 'white') {
      setdkmode({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      setdktext("Switch to Darkmode")
    }
    else {
      setdkmode({
        color: 'white',
        backgroundColor: 'black'
      })
      document.body.style.background = '#101211'
      document.body.style.color = 'white'

      setdktext("Switch to Lightmode")
    }
  }
  // usestate for  blue color mode 
  const [bluetext, setbluetext] = useState("switch to bluemode")
  const bluebuttton = () => {
    if (dkmode.color === 'white') {
      setdkmode({
        color: 'blue',
        backgroundColor: 'white'
      })
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      setbluetext("Switch to bluemode")
    }
    else {
      setdkmode({

        color: 'white',
        backgroundColor: 'blue'
      })
      document.body.style.background = '#7372ef'
      document.body.style.color = 'white'
      setbluetext("Switch to lightmode")

    }
  }
  //green mode
  const [greentext, setgreentext] = useState("switch to greenmode")
  const greenbuttton = () => {
    if (dkmode.color === 'white') {
      setdkmode({
        color: ' #99F443',
        backgroundColor: 'white'
      })
      document.body.style.background = 'white'
      document.body.style.color = 'green'
      setgreentext("Switch to greenmode")
    }
    else {
      setdkmode({

        color: 'white',
        backgroundColor: ' #99F443'
      })
      document.body.style.background = 'green'
      document.body.style.color = 'white'
      setgreentext("Switch to lightnmode")

    }
  }


  return (
    <>
      <Navbar logo_name="TextWizard" dkmode={dkmode} dktext={dktext} darkmode={dkbutton} bluebtn={bluebuttton} bluetext={bluetext} greenbuttton={greenbuttton} greentext={greentext} />
      <createBrowserRouter>
      <Routes>
          <Route exact path='/About' element={<About dkmode={dkmode} />}></Route>
          <Route exact path='/Textform' element={ <Textform heading="Enter the text to process" />}></Route>

      </Routes>
      
      </createBrowserRouter>
    </>

  );
}

export default App;
