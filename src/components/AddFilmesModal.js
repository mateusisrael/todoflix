import React from 'react';
import claquete from '../img/claquete.svg';


export default class AddFilmesModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titulo: undefined,
            descricao: '',
            status: '',
            img_path: '',
            nota: 0,
        }
    }

    avaliar = (nota) => {
        console.log("avaliar", nota);
        this.setState({
            nota: nota,
        })
    }

    clickAddFilme = (event) => {
        event.preventDefault();

        if(this.state.titulo !== '' && this.state.status !== '' && this.state.nota !== 0) {
            let novo_filme = {
                id: this.props.filmes_cont,
                titulo: this.state.titulo,
                descricao: this.state.descricao,
                status: this.state.status,
                img_path: this.state.img_path,
                nota: this.state.nota,
            }
            this.props.AddFilme(novo_filme);
            this.props.cancelar();
        } else {
            alert(`Preencha o campo "Nome", "Status" e nota para continuar`);
        }
        
        
    }

    clickCancelar = (event) => {
        event.preventDefault();
        this.props.cancelar();
    }



    render() {
        return(
            <div className="overlay">
                <section className="addFilmesModal">
                    <div class="modal-padding row">
                        <figure class="claquete">
                            <img src={claquete} alt="claquete"></img>
                        </figure>
                        <section className="add-filmes-section">
                            <h1>Adicionar novo Filme:</h1>
                            <form className="adicionar-filme-form">
                                <label>Nome:</label>
                                <input onChange={
                                    event => this.setState({ titulo: event.target.value })
                                } type="text" name="nome" required></input>

                                <label>Descrição:</label>
                                <input onChange={
                                    event => this.setState({ descricao: event.target.value })
                                } type="text" name="descricao"></input>

                                <label>Status:</label>
                                <input onChange={
                                    event => this.setState({ status: event.target.value }) 
                                } type="text" name="status" placeholder="quero ver/ja vi" required></input>

                                <label>Imagem de exibição</label>
                                <div class="form-select-img">
                                    <input onChange={
                                        event => this.setState({ img_path: event.target.value })
                                    } type="text" name="img_path"></input>
                                    <button onClick={
                                        (event) => { event.preventDefault() }
                                    } className="form-button">Adicionar Imagem</button>
                                </div>

                                <label>Nota:</label>
                                    <Avaliacao notaAtual={this.state.nota} clickAvaliar={this.avaliar}/>

                                <div className="botoes-form-cont">
                                    <button onClick={this.clickCancelar} className="unfocus-button">cancelar</button>
                                    <button onClick={this.clickAddFilme} className="form-button">feito</button>
                                </div>

                            </form>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}



class Avaliacao extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nota: 0,

            estrelas: [
                {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}
            ]
        }
    }

    render() {
        return(

            <div className="stars-row">
                {
                    this.state.estrelas.map(estrela => {
                        if(estrela.id <= this.props.notaAtual) {
                            return (
                                <button onClick={
                                    (event) => {
                                        event.preventDefault();
                                        this.props.clickAvaliar(estrela.id)
                                    }
                                } className="star-enable"></button>
                            );
                        } else if(estrela.id > this.props.notaAtual) {
                            return(
                                <button onClick={
                                    (event) => {
                                        event.preventDefault();
                                        this.props.clickAvaliar(estrela.id)
                                    }
                                } className="star-disable"></button>
                            );
                        }
                    })
                }

            </div>
        );
    }

}