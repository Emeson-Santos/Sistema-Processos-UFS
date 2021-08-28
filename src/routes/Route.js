import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Processos from '../pages/Processos';
import Desenvolvedores from '../pages/Desenvolvedores';
import Sobre from '../pages/Sobre';
import Contatos from '../pages/Contatos';
import Email from '../pages/Email';
import EmailDosea from '../pages/Email/emailDosea';
import EmailRaphael from '../pages/Email/emailRaphael';
import EmailPauloVitor from '../pages/Email/emailPauloVitor';
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
            <Route exact path="/email" component={Email}/>
            <Route exact path="/emailDosea" component={EmailDosea}/>
            <Route exact path="/emailRaphael" component={EmailRaphael}/>
            <Route exact path="/emailPauloVitor" component={EmailPauloVitor}/>
            
                       
            

            <Route exact path='/notify' component={Notify}/>
            
        </Switch>
      </BrowserRouter>

  )
}