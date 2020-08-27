import React from "react";

interface Props {
    situation: "paga" | "ematraso" | "proxima";
}

const DetailsItem: React.FC<Props> = ({ situation }) => {
    const handleSituation = () => {
        const renderSituation = {
            paga: "Paga",
            ematraso: "Em atraso",
            proxima: "Próxima",
        };

        return renderSituation[situation];
    };

    return (
        <div className="col-xs-12 nopadding mt-3">
            <div className="col-xs-2 col-sm-2">1</div>
            <div className="col-xs-3 col-sm-2">01/03/2020</div>
            <div className="col-xs-4 col-sm-2">R$ 100,00</div>
            <div className="col-xs-3 col-sm-2">29/05/2020</div>
            <div className="col-xs-12 col-sm-2">
                <span className={situation}> {handleSituation()} </span>
            </div>
            {situation === "proxima" ? (
                <div className="col-xs-0 col-sm-2">
                    <a className="proxima txt-10-mob">Gerar Boleto</a>
                </div>
            ) : (
                <div className="col-xs-0 col-sm-2"></div>
            )}
        </div>
    );
};

export default DetailsItem;
