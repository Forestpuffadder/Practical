import React ,{component}from 'react';
import { BrowserRouter as Router, Switch, Route, Link,Redirect} from 'react-router-dom';
import history from '../_helpers/histroy';
import pastelist from '../components/Product/PasteList';
import Header from '../common/Header';
import login from '../components/Login'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
    <div className="App">
      <Router history={history}>
        <Header/> 
          <Switch>  
            <Route exact path='/pastelist' component={pastelist}  />    
            <Route exact path='/login' component={login}  />   
            <Redirect from="*" to="/" />   
          </Switch>    
        </Router>
     </div>
    )
  }
}
  export default App;
