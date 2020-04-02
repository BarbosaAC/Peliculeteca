import React, { createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import FormPelicula from './componets/FormPelicula.js';
import ListaPelicula from './componets/ListaPelicula.js';
import {loadDataLocalStorage, saveItemLocalStorage, removeItemLocalStorage} from './util/storageutils.js';
import {sendDataToAPI, sendDataToAPIFetch, findMovies} from './util/request.js';

class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        peliculas: loadDataLocalStorage(),
      };
      this.txtSearch = React.createRef();
    }

    addPelicula =  (pelicula) => {
      console.log(pelicula.titulo + pelicula.urlImagen);
      this.setState ({
        peliculas: [...this.state.peliculas, pelicula]
      });
      saveItemLocalStorage(pelicula);
    }

    addPelicula = (peliculas) => {

      var peliculasFinal = [];
      for(let pelicula of peliculas){
        peliculasFinal.push({
          titulo: pelicula.Title,
          urlImagen: pelicula.Poster
        });
      }
      this.setState({
        peliculas:[
          ...peliculasFinal,
          ...this.state.peliculas
        ]
      });
    }

    removePelicula = (titulo) => {
      this.state.peliculas=this.state.peliculas.filter(item => item.titulo !== titulo);
      this.setState({
        peliculas: this.state.peliculas
      });
      removeItemLocalStorage(titulo);
    }
    sendData = (e) =>{
      console.log("Send data");
      sendDataToAPI(this.state.peliculas);
    }

    sendDataFetch = e => {
      console.log("Send data fetch");
      sendDataToAPIFetch(this.state.peliculas);
    }

    searchMovie = e => {
      
      const query = this.txtSearch.current.value;
      console.log(query);
      findMovies(query,this.addPelicula);
    }

  render() {
  return (  
    <div className="App">
       <div>
      <input type="text" ref={this.txtSearch}></input>
      <button onClick={this.searchMovie}>Buscar</button>
      </div>
      <FormPelicula addPelicula={this.addPelicula}/>
      <button onClick={this.sendData} className="btn-subir">Enviar </button>
      <button onClick={this.sendDataFetch} className="btn-subir">Enviar fetch </button>
      <ListaPelicula lista={this.state.peliculas} removePelicula={this.removePelicula}/>
    </div>
   
  );
}
}

export default App;
