import React, {Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Header/Navbar';
import Footer from './component/footer/footer';
import {Switch, Route} from 'react-router-dom';
const Home = React.lazy(() => import('./containers/Home/Home'));
function App() {
  return (
    <React.Fragment>
   <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      
        <Route path="/" exact component={Home} />
       
      </Switch>
    </Suspense>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
