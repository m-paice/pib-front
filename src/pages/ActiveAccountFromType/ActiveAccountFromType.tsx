import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { Container } from "./ActiveAccountFromTypeContainer";

interface Props {
    payload: {
        data: {};
        actions: {
            handleConfirmActiveAccountType(token: string): void;
        };
    };
}

const ActiveAccount: React.FC<Props> = ({ payload }) => {
    const { token } = useParams();

    const { actions } = payload;
    const { handleConfirmActiveAccountType } = actions;

    useEffect(() => {
        handleConfirmActiveAccountType(token);
    }, []);

    return (
        <div className="page container">
            <strong> Ativando suas notificações... </strong>
        </div>
    );
};

export default Container(ActiveAccount);
