import React from "react";

interface Props {
    confirm: boolean;
}

const Billet: React.FC<Props> = (props) => {
    const { confirm } = props;

    return (
        <div>
            <div className="font-weight-bold">Escolha como receber seu boleto</div>
            <div className="d-flex mt-2 mb-2">
                <div className="col-md-6  nopadding padding-10">
                    <button style={{ border: "none" }} disabled={confirm} className="cacordo font-weight-bold">
                        Gerar Boleto
                    </button>
                </div>
                <div className="col-md-6  nopadright padding-10">
                    <button style={{ border: "none" }} disabled={confirm} className="cacordo font-weight-bold">
                        Enviar por email
                    </button>
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
