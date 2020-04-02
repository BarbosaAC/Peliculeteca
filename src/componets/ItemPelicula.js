import React from 'react';

class ItemPelicula extends React.Component{

    constructor(props){
        super(props);
        this.removePelicula = props.removePelicula;
    }
     
    
    
    remove = (e) =>{
        e.preventDefault();
        var titulo = this.props.pelicula.titulo;
        this.removePelicula(titulo);
    }
    render(){
        const pelicula = this.props.pelicula;
        return(
            <div id="img">
                <h4>{pelicula.titulo}</h4>
                <img src={pelicula.urlImagen}  className= "img-pelicula" alt ={pelicula.titulo}/>
                <div>
                    <button onClick={this.remove}>Eliminar</button>
                </div>
            </div>
        );
    }
}

export default ItemPelicula;