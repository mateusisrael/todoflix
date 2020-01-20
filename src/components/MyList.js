import React from 'react';
// import capitao_img from '../img/capitc3a3o-fantc3a1stico1.png';
// import corra_img from '../img/images1.png'

export default class MyList extends React.Component{

    constructor(props) {
        super(props);
    }

    filtrarStatus = (filme) => {
        switch(filme.status){
            case 'ja vi': return( <div className="statusbar-visto">{filme.status}</div> );
            case 'quero ver': return( <div className="statusbar-nvisto">{filme.status}</div> );
            default: return( <div className="statusbar-nvisto">{filme.status}</div> );
        }
    }

    renderFilme = (filme) => {

        return(
            <div className="filme-container">
                <div className="nota-cont">{filme.nota}</div> 
                <div className="filme-img-container">
                    { filme.img_path != '' ? <img className="img" src={filme.img_path}></img>
                        : <div className="box">sem imagem</div>
                    }
                    { this.filtrarStatus(filme) }
                </div>
                <h2>{filme.titulo}</h2>
                <div className="descricao-cont">
                    <p>{filme.descricao}</p>
                </div>
            </div>
        );
    }

    render() {
        return(
            <div className="MyList">
                <div className="title-container">
                    <h1>Minha Lista:</h1>
                </div>
                <div className="filmes-lista">
                    {
                        this.props.filmes.map((filme) => {
                            return (this.renderFilme(filme));
                        })
                    }
                </div>
            </div>
        )
    }
} 

