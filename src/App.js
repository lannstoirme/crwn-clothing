import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>SNEAKERS PAGE</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>WOMENS PAGE</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/jackets' component={JacketsPage} />
        <Route exact path ='/sneakers' component={SneakersPage} />
        <Route exact path='/womens' component={WomensPage} />
        <Route exact path='/mens' component={MensPage} />
        </Switch>
    </div>
  );
}

export default App;
