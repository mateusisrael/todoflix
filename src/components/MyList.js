import React from 'react';
import capitao_img from '../img/capitc3a3o-fantc3a1stico1.png';
import corra_img from '../img/images1.png'

export default class MyList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            filmes: [
                {
                    id: 0,
                    titulo: 'Capitão Fantástico',
                    descricao: 'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.',
                    status: 'quero ver',
                    img_path: capitao_img,
                    nota: 5.0,
                },
                {
                    id: 1,
                    titulo: 'Corra!',
                    descricao: 'Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente amigáveis da sua namorada.',
                    status: 'quero ver',
                    img_path: corra_img,
                    nota: 2.0,
                },
            ]
        }
    }

    filtro = () => {

    }

    render() {
        return(
            <div className="MyList">
                <div className="title-container">
                    <h1>Minha Lista:</h1>
                </div>
                <div className="filmes-lista">
                    {
                        this.state.filmes.map((filme) => {
                            return (renderFilme(filme));
                        })
                    }
                </div>
            </div>
        )
    }
} 

function renderFilme(filme) {

    return(
        <div className="filme-container">
            <div className="nota-cont">{filme.nota}</div> 
            <div className="filme-img-container">
                { filme.img_path != '' ? <img className="img" src={filme.img_path}></img>
                    : <div className="box">sem imagem</div>
                }
                <div className="statusbar">{filme.status}</div>
            </div>
            <h2>{filme.titulo}</h2>
            <div className="descricao-cont">
                <p>{filme.descricao}</p>
            </div>
        </div>
    );
}