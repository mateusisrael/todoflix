import React from 'react';
import claquete from '../img/claquete.svg';


export default class AddFilmesModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            titulo: '',
            descricao: '',
            status: '',
            img_path: '',
            nota: undefined,
        }
    }

    clickAddFilme = (event) => {
        event.preventDefault();
        let novo_filme = {
                id: this.state.id,
                titulo: this.state.titulo,
                descricao: this.state.descricao,
                status: this.state.status,
                img_path: this.state.img_path,
                nota: this.state.nota,
        }
        this.props.AddFilme(novo_filme);
        this.props.cancelar();
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
                                } type="text" name="nome"></input>

                                <label>Descrição:</label>
                                <input onChange={
                                    event => this.setState({ descricao: event.target.value })
                                } type="text" name="descricao"></input>

                                <label>Status:</label>
                                <input onChange={
                                    event => this.setState({ status: event.target.value }) 
                                } type="text" name="status" placeholder="quero ver/ja vi"></input>

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
                                <div className="stars-row">
                                    <button onClick={
                                        (event) => {
                                            event.preventDefault();
                                        }
                                    } className="star"></button>

                                    <button onClick={
                                        (event) => {
                                            event.preventDefault();
                                        }
                                    } className="star"></button>

                                    <button onClick={
                                        (event) => {
                                            event.preventDefault();
                                        }
                                    } className="star"></button>

                                    <button onClick={
                                        (event) => {
                                            event.preventDefault();
                                        }
                                    } className="star"></button>

                                    <button onClick={
                                        (event) => {
                                            event.preventDefault();
                                        }
                                    } className="star"></button>

                                </div>

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