import React from "react";

interface Props {}

const Header: React.FC<Props> = (props) => {
    return (
        <div className="cada debito semBorda titulo-lista-regras">
            <div className="row rowCenter">
                <div className="col-md ">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            CPF
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md ">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            Nome
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md  hidden-xs">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            Dívida
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md  hidden-xs">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            Negociação
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md  hidden-xs">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            Recebido
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md hidden-xs">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            Atrasado
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            Situação
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md  hidden-xs">
                    <div className="lab">
                        <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                            Bloquear <br /> e Simular
                            <span className="glyphicon glyphicon-question-sign ml-1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
