import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { Container } from "./ActiveAccountContainer";

interface Props {
    payload: {
        data: {};
        actions: {
            handleActiveAccount(token: string): void;
        };
    };
}

const ActiveAccount: React.FC<Props> = ({ payload }) => {
    const { token } = useParams();

    const { actions } = payload;
    const { handleActiveAccount } = actions;

    useEffect(() => {
        handleActiveAccount(token);
    }, []);

    return (
        <div className="page container">
            seu token <strong> {token} </strong>
        </div>
    );
};

export default Container(ActiveAccount);
