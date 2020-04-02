import React from 'react';
import ItemPelicula from './ItemPelicula.js';

class ListaPelicula extends React.Component{

constructor(props){
    super(props);
    this.removePelicula = props.removePelicula;
}
    render(){
        const lista = this.props.lista;
        return (
            <div>
                {
                    this.props.lista.map(item => {
                        return (
                            <ItemPelicula pelicula = {item} removePelicula={this.removePelicula}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default ListaPelicula;