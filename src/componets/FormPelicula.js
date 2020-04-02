import React from 'react';

class FormPelicula extends React.Component{

    constructor(props){
        super(props);
        this.txtTitulo = React.createRef();
        this.txtUrlImagen = React.createRef();
        this.elementImg = React.createRef();
        this.addPelicula = props.addPelicula;
    }

    handleOnSubmit = (e) =>{
        e.preventDefault();
        var titulo = this.txtTitulo.current.value;
        var urlImagen = this.txtUrlImagen.current.value;

        this.elementImg.current.src = urlImagen;

        var pelicula = {
            titulo: titulo,
            urlImagen: urlImagen
        };
        this.addPelicula(pelicula);
    }
    render(){
        return(
            <div>
                <h2>Nueva Pelicula</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Titulo</label>
                        <input type="text" ref={this.txtTitulo}/>
                    </div>
                    <div>
                        <label>Imagen</label>
                        <input type="text" ref={this.txtUrlImagen}/>
                    </div>
                    <input type="submit" value="Agregar"/>
                    <div>
                        <img ref={this.elementImg}/>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default FormPelicula;