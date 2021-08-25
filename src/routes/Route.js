import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Processos from '../pages/Processos';
import Desenvolvedores from '../pages/Desenvolvedores';
import Sobre from '../pages/Sobre';
import Contatos from '../pages/Contatos';
import Notify from '../pages/Notify';


export default function Routes(){
  return(
      <BrowserRouter>
            <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/processos" component={Processos}/>
            <Route exact path="/categoria" component={Home}/>
            <Route exact path="/desenvolvedores" component={Desenvolvedores}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route exact path="/contatos" component={Contatos}/>            
            

            <Route exact path='/notify' component={Notify}/>
            
        </Switch>
      </BrowserRouter>

  )
}