import React from "react";

import IconeError from "../../assets/imagens/icone-erro.png";

// components
import Input from "../../components/Fields/Input";

interface Props {}

const Register: React.FC<Props> = (props) => {
    return (
        <div className="page">
            <div className="alerta">
                <div className="container">
                    <img src={IconeError} />
                    <div className="msg-erro">
                        <strong>Atenção</strong> - Mensagem de erro
                    </div>
                </div>
            </div>

            <div className="container meu-cadastro">
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <h2 className="h2pad titulo-mob">Seus Dados</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="descmod">
                        <div className="col-md-12 sub-titulo-mob">Confira aqui suas informações.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <Input placeholder="Nome Completo" className="form-control" />
                    </div>

                    <div className="form-group col-md-6">
                        <Input placeholder="Nome Completo" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <Input placeholder="Data de Nascimento" className="data-nascimento form-control" />
                    </div>

                    <div className="form-group col-md-6">
                        <Input placeholder="Email" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <Input placeholder="Celular" className="telefone form-control" />
                        <span className="erro">Mensagem de erro nesse campo</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mt-3">
                        <h2 className="h2pad titulo-mob">Endereço</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="descmod">
                        <div className="col-md-12 sub-titulo-mob">Mantenha sempre seu endereço atualizado.</div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-3 col-sm-6">
                        <Input placeholder="CEP" className="form-control" />
                    </div>
                    <div className="form-group col-md-3 col-sm-6">
                        <Input placeholder="Tipo" className="form-control" />
                    </div>

                    <div className="form-group col-md-6">
                        <Input placeholder="Endereço" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-3 col-sm-6">
                        <Input placeholder="Número" className="form-control" />
                    </div>
                    <div className="form-group col-md-3 col-sm-6">
                        <Input placeholder="Complemento" className="form-control" />
                    </div>

                    <div className="form-group col-md-6">
                        <Input placeholder="Bairro" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <Input placeholder="Cidade" className="form-control" />
                    </div>

                    <div className="form-group col-md-6">
                        <Input placeholder="UF" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mt-3">
                        <h2 className="h2pad titulo-mob">Senha</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="descmod">
                        <div className="col-md-12 sub-titulo-mob">Aqui você pode alterar sua senha de acesso.</div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <Input placeholder="Senha Atual" className="form-control" />
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <Input placeholder="Senha Nova" className="form-control" />
                    </div>

                    <div className="form-group col-md-6">
                        <Input placeholder="Repetir Senha Nova" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="boxcheck">
                        <div className="checkboxNew checkboxNew-mob">
                            <Input type="checkbox" />
                        </div>
                        <div className="tex">Gostaria de receber dicas e oportunidades da Newco</div>
                        {/* <!--<span className="erro">* Você precisa aceitar os termos para seguir em frente</span>--> */}
                    </div>
                </div>

                <div className="row">
                    <div className="bbuttons col-md-6">
                        <button className="btpadrao">Salvar Alterações</button>
                    </div>
                </div>

                <div className="row">
                    <div className="sucesso col-md-12 alert alert-success" role="alert">
                        Alterações salvas com sucesso!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
