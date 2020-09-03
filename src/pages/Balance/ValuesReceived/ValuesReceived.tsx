import React from "react";

import Bar from "../../../components/Graphics/Bar";
import Pie from "../../../components/Graphics/Pie";

import Calendar_2020 from "../../../assets/imagens/calendar_2020.png";

interface Props {}

const ValuesReceived: React.FC<Props> = (props) => {
    return (
        <>
            <div className="col-sm-4 text-center">
                <div>
                    <b>Planos</b>
                    <div className="txt-blue">À vista: R$ 300,00</div>
                    <div className="txt-darkblue">Parcelado: R$ 600,00</div>
                    <br />
                </div>

                <Pie labels={["Item 1", "Item 2"]} data={[10, 20]} colors={["#26d3ff", "#14657b"]} />
            </div>
            <div className="col-sm-1 colum-width-2">
                <div className="traco-vertical-g"></div>
            </div>
            <div className="col-sm-7">
                <div className="barraRolagem">
                    <div className="aligncenter">
                        <div className="col-sm-10">
                            <b>
                                Valores
                                <br />
                                Recebidos
                            </b>
                        </div>
                        <div className="align-right">
                            <img src={Calendar_2020} />
                        </div>
                        <Bar
                            title="Valores recebidos"
                            labels={["01/01", "02/01", "03/01", "04/01", "05/01", "06/01"]}
                            data={[10, 21, 0, 5, 7, 3]}
                            color="#14657b"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ValuesReceived;
