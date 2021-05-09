import './App.css';
//  import Header from './components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import Cards from './components/Cards'
// import Title from './components/Title';
import FooterTry from './components/FooterTry';
import DigitalContent from './components/DigitalContent';
import SellContent from './components/SellContent';
import Navigate from './components/Navigate'
import NavBar from './components/NavBar';
import Home from './components/Home';
// import Example from './components/Example';
// import Bar from './components/Bar';



function App() {
  return (
    <>
      {/* <Header /> */}
         <Router>
              <NavBar/>
                <div >
                          
                            {/* <Title/>
                            <Cards/> */}
                            
                            <Switch>
                            {/* <Route path="/" component={Header} ></Route> */}
                            
                           
                            <Route exact path="/" component={Home} ></Route>
                            <Route exact path="/second" component= {DigitalContent}></Route>
                            <Route exact path="/third" component= {SellContent}></Route>
                            <Route exact path="/navigate" component= {Navigate}></Route>
                            </Switch>  

                            
                              
                </div>
        </Router>
        <FooterTry/>
    </>
  );
}

export default App;
