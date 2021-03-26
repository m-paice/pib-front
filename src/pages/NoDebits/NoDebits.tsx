import React from "react";

import { Link } from "react-router-dom";

// components
import Carousel from "../../components/Carousel";
import BoxKnowMore from "../../components/BoxKnowMore";
import WarningText from "../../components/WarningText";

import { noDebitsContainer } from "./NoDebitsContainer";

import Fotoperfil from "../../assets/imagens/fotoperfil.png";
import Carafeliz from "../../assets/imagens/carafeliz.png";

interface Props {
    payload: {
        data: {
            debitsPaidOut: boolean;
            activeNotifications: boolean;
            typeActiveAccountContrary: string;
        };
        actions: {
            handleActiveNotification(data): void;
        };
    };
}

const NoDebits: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;
    const { debitsPaidOut, activeNotifications, typeActiveAccountContrary } = data;
    const { handleActiveNotification } = actions;

    const handleClickActiveNotification = () => {
        const notification = typeActiveAccountContrary === "Telefone" ? "sms" : "email";

        handleActiveNotification({ typeActiveAccount: notification });
    };

    return (
        <div className="page">
            {!activeNotifications && (
                <WarningText>
                    Você ainda não ativou {typeActiveAccountContrary}. &nbsp;
                    <a href="#" onClick={handleClickActiveNotification}>
                        Clique aqui para ativar agora
                    </a>
                </WarningText>
            )}
            <div className="row container">
                <div className="col-xs-12 col-sm-3 col-sm-offset-1">
                    <img className="pessoa" src={Fotoperfil} />
                    <img className="cara" src={Carafeliz} />
                </div>

                <div className="col-xs-12 col-sm-8 titulos">
                    <h2>Parabéns,</h2>
                    <h3>não encontramos dívidas em seu nome.</h3>
                    {debitsPaidOut && <Link to="/debits">Ver débitos que você já negociou conosco</Link>}
                </div>
            </div>

            <div className="container">
                <Carousel />
            </div>

            <div className="faixa2">
                <div className="row container">
                    <div className="col-xs-12 col-sm-6">
                        <BoxKnowMore
                            title="Empréstimo Pessoal"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco."
                        />
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <BoxKnowMore
                            title="Empréstimo Pessoal"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default noDebitsContainer(NoDebits);
