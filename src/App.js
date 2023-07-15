import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import Nav from 'D:/React/OnlineTest/my-app/src/Component/nav.js';
import Nav from './Component/Nav.js';
import Gs from './Component/GeneralScience.js';
import About from './Component/About.js'
import IQ from './Component/IQ.js';
import Programming from './Component/Programming.js';
import Footer from './Component/Footer.js';
import  Error  from './Component/Error.js';
import ClickHandle from './Component/ClickHandle.js';
import Result from './Component/Result.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' Component={About}/>
          <Route path='/gs' Component={Gs}/>
          <Route path='/iq' Component={IQ}/>
          <Route path='/pro' Component={Programming}/>
          {/* <Route path='/GsQuiz' Component={ClickHandle}/>
          <Route path='/IQuiz' Component={ClickHandle}/>
          <Route path='/ProQuiz' Component={ClickHandle}/> */}
          {/* <Route path='/Submit' Component={Result}/> */}
          <Route path='' Component={Error}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )

}


export default App;
