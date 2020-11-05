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
        <div className="row nopadding mt-3">
            <div className="col-md-2">1</div>
            <div className="col-md-2">01/03/2020</div>
            <div className="col-md-2">R$ 100,00</div>
            <div className="col-md-2">29/05/2020</div>
            <div className="col-md-2">
                <span className={situation}> {handleSituation()} </span>
            </div>
            {situation === "proxima" ? (
                <div className="col-md-2">
                    <a className="proxima txt-10-mob">Gerar Boleto</a>
                </div>
            ) : (
                <div className="col-md-2"></div>
            )}
        </div>
    );
};

export default DetailsItem;
