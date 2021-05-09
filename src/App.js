import React from 'react'
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'
import Parent from './parent.jsx';
import Childone from './childone.jsx';
import Childtwo from './childtwo.jsx'
import MyContext from './mycontext.jsx';

// import mycontext and create a Proviver and wrap it outside the browser router
// my context will be having two properties, Provider and Consumer

const { Provider } = MyContext

// now we can create a global state here and send it as a prop in Provider
// later in any of the child components(wrapped inside the Provider), we can create a Consumer and can use the 
// global state which is sending from here as a prop. we can pass only one prop(to send multiple values
//make a json object and pass it as a prop)



function App() {


  const [MyState, SetmyState] = React.useState("Hi, This message is from global state(context)")

  return (
    // sedning global context as a prop in Provider
    <Provider value={{ MyStateVal: MyState }} >
      <BrowserRouter>
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <Parent />
            </Route>
            <Route path="/childone" component={Childone} />
            <Route path="/childtwo" component={Childtwo} />
          </Switch>
        </HashRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
