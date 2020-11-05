import React from "react";

const Billet: React.FC = () => {
    return (
        <div>
            <div className="font-weight-bold">Escolha como receber seu boleto</div>
            <div className="d-flex mt-2 mb-2">
                <div className="col-md-6  nopadding padding-10">
                    <a className="cacordo font-weight-bold" href="javascript:void(0);">
                        Gerar Boleto
                    </a>
                </div>
                <div className="col-md-6  nopadright padding-10">
                    <a className="cacordo font-weight-bold" href="javascript:void(0);">
                        Enviar por email
                    </a>
                </div>
            </div>
            <div className="imp">
                <b>Importante</b>
                <br />
                Caso você tenha optado por parcelamento via boleto lembre-se que os próximos boletos serão enviados no
                e-mail informado em seu cadastro. Se preferir os boletos também estarão disponíveis aqui no site para
                você.
            </div>
        </div>
    );
};

export default Billet;
