import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Processos from '../pages/Processos';
import Desenvolvedores from '../pages/Desenvolvedores';

export default function Routes(){
  return(
      <BrowserRouter>
            <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/processos" component={Processos}/>
            <Route exact path="/categoria" component={Home}/>
            <Route exact path="/desenvolvedores" component={Desenvolvedores}/>
        </Switch>
      </BrowserRouter>

  )
}