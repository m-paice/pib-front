import React from "react";

interface Props {}

const Wallet: React.FC<Props> = (props) => {
    return (
        <>
            <div className="col-sm-4 text-center">
                <b>Devedores</b>
                <div className="txt-saque">002.237</div>
            </div>
            <div className="col-sm-1 colum-width-2">
                <div className="traco-vertical-p"></div>
            </div>
            <div className="col-sm-4 text-center">
                <b>Dívidas</b>
                <div className="txt-saque">000.945</div>
            </div>
            <div className="col-sm-1 colum-width-2">
                <div className="traco-vertical-p"></div>
            </div>
            <div className="col-sm-3 text-center">
                <div className="font-25">
                    <b>Total da Carteira</b>
                </div>
                <div className="txt-saque">R$ 000.139.832,20</div>
            </div>
        </>
    );
};

export default Wallet;
