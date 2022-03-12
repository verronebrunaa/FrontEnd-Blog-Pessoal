import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/estatics/navbar/navbar';
import Footer from './components/estatics/footer/footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import './App.css';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTemas from './components/temas/cadastroTemas/CadastroTemas';
import DeletarTemas from './components/temas/deletarTemas/DeletarTemas';
import DeletarPostagens from './components/postagens/deletarPostagens/DeletarPostagens';
import {Provider} from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>
        <Route exact path='/'>
            <Login />
          </Route>
         <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTemas />
          </Route>
          <Route path='/posts'>
            <ListaPostagens />
          </Route>
          
          <Route exact path='/formularioPostagens'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagens/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTemas'>
            <CadastroTemas />
          </Route>
          <Route exact path='/formularioTemas/:id'>
            <CadastroTemas />
          </Route>
          <Route path='/deletarPostagens/:id'>
            <DeletarPostagens />
          </Route>
          <Route path='/deletarTemas/:id'>
            <DeletarTemas />
          </Route>

          </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;