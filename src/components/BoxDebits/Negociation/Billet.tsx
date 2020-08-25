import React from "react";

const Billet: React.FC = () => {
    return (
        <div>
            <div className="col-xs-12 col-sm-6 pagb3 bbol">
                Escolha como receber seu boleto
                <div className="col-xs-12 col-sm-6 nopadding padding-10">
                    <a className="cacordo" href="javascript:void(0);">
                        Gerar Boleto
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 nopadright padding-10">
                    <a className="cacordo" href="javascript:void(0);">
                        Enviar por email
                    </a>
                </div>
                <div className="imp">
                    <b>Importante</b>
                    <br />
                    Caso você tenha optado por parcelamento via boleto lembre-se que os próximos boletos serão enviados
                    no e-mail informado em seu cadastro. Se preferir os boletos também estarão disponíveis aqui no site
                    para você.
                </div>
            </div>
            <div className="col-xs-12 col-sm-3 pagb2 ccor">
                Resumo de seu acordo
                <label>
                    Valor da dívida
                    <input className="imp" placeholder="R$ 100,00" />
                </label>
                <label>
                    Valor do desconto
                    <input className="imp desconto" value="- R$ 100,00" />
                </label>
                <label>
                    Total
                    <input className="imp" disabled placeholder="R$ 100,00" />
                </label>
                <a className="cacordo" href="javascript:void(0);">
                    Confirmar Acordo
                </a>
            </div>
        </div>
    );
};

export default Billet;
