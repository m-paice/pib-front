import React from "react";

// assets
import Logoac from "../../assets/imagens/logoac.png";

const Footer: React.FC = () => {
    return (
        <>
            <div className="boxfooter">
                <div className="container">
                    <div className="inlrod">
                        <div className="boxqsro nopadding">
                            <h3>Quem somos</h3>
                            <ul>
                                <li>
                                    <a href="">Nosso diferencial</a>
                                </li>
                                <li>
                                    <a href="">Equipe</a>
                                </li>
                            </ul>
                        </div>

                        <div className="boxqsro nopadding">
                            <h3>Como Funciona</h3>
                            <ul>
                                <li>
                                    <a href="">Para consumidores</a>
                                </li>
                                <li>
                                    <a href="">Para empresas</a>
                                </li>
                            </ul>
                        </div>

                        <div className="boxqsro nopadding">
                            <h3>Serviços</h3>
                            <ul>
                                <li>
                                    <a href="">Consulta CPF</a>
                                </li>
                                <li>
                                    <a href="">Negociação de dívidas</a>
                                </li>
                                <li>
                                    <a href="">Empréstimos</a>
                                </li>
                            </ul>
                        </div>

                        <div className="boxqsro nopadding">
                            <h3>Parceiros</h3>
                            <ul>
                                <li>
                                    <a href="">Associações comerciais</a>
                                </li>
                                <li>
                                    <a href="">Produtos</a>
                                </li>
                            </ul>
                        </div>

                        <div className="boxqsro nopadding">
                            <h3>Dúvidas</h3>
                            <ul>
                                <li>
                                    <a href="">Perguntas Frequentes</a>
                                </li>
                                <li>
                                    <a href="">Segurança</a>
                                </li>
                                <li>
                                    <a href="">Fale conosco</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boxfooter2">
                <div className="container">
                    <div className="col-xs-12 col-sm-9 esquebox">
                        Desta maneira, a execução dos pontos do programa representa uma abertura para a melhoria das
                        condições inegavelmente apropriadas. Por outro lado, o entendimento das metas propostas cumpre
                        um papel essencial na formulação de alternativas às soluções ortodoxas. O que temos que ter
                        sempre em mente é que a competitividade nas transações comerciais exige a precisão e a definição
                        do sistema de formação de quadros que corresponde às necessidades.
                    </div>
                    <div className="col-xs-12 col-sm-3 imgdiir">
                        <img src={Logoac} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
