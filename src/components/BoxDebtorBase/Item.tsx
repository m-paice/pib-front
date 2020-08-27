import React from "react";

interface Props {}

const Item: React.FC<Props> = (props) => {
    return (
        <div className="row pagt align-center">
            <div className="row pagt align-center">
                <div className="col-md text-nowrap">
                    Forma de Pagamento
                    <br />
                    <div className="lab lab2">
                        <strong>Cartão de Crédito</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap">
                    Parcelamento
                    <div className="lab lab2">
                        <strong>1x de R$ 1.300,00</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap">
                    Data de Vencimento
                    <div className="lab lab2">
                        <strong>Dia 29</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap">
                    Valor da Dívida
                    <div className="lab lab2">
                        <strong>R$ 400,00</strong>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row justify-content-between">
                        <div className=" text-nowrap">
                            Desconto
                            <div className="lab lab2">
                                <strong>R$ 100,00</strong>
                            </div>
                        </div>
                        <div className=" text-nowrap">
                            Total
                            <div className="lab lab2">
                                <strong>R$ 300,00</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-width hidden-xs ">
                <div className="row nopadding ltab">
                    <div className="col-md text-nowrap lth">
                        <strong>Parcela </strong>
                        <div className="col-md mt-2">1</div>
                        <div className="col-md ">2</div>
                        <div className="col-md ">2</div>
                    </div>
                    <div className="col-md text-nowrap lth">
                        <strong>Vencimento </strong>
                        <div className="col-md mt-2">01/03/2020</div>
                        <div className="col-md ">01/03/2020</div>
                        <div className="col-md ">01/03/2020</div>
                    </div>
                    <div className="col-md text-nowrap lth">
                        <strong>Valor da Parcela</strong>
                        <div className="col-md mt-2">R$ 100,00</div>
                        <div className="col-md ">R$ 100,00</div>
                        <div className="col-md ">R$ 100,00</div>
                    </div>
                    <div className="col-md text-nowrap lth">
                        <strong>Data de Pagamento</strong>
                        <div className="col-md mt-2">29/05/2020</div>
                        <div className="col-md ">29/05/2020</div>
                        <div className="col-md ">29/05/2020</div>
                    </div>
                    <div className="col-md text-nowrap lth sit">
                        <strong>Situação</strong>
                        <div className=" col-md mt-2">
                            <span className="paga ">Paga</span>
                        </div>
                        <div className=" col-md ">
                            <span className="paga ">Paga</span>
                        </div>
                        <div className=" col-md ">
                            <span className="paga ">Paga</span>
                        </div>
                    </div>
                    <div className="col-md lth">
                        <div className="col-md "></div>
                        <div className="col-md "></div>
                        <div className="col-md "></div>
                        <div className="col-md ">
                            <a className="proxima haha text-nowrap">Gerar Boleto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
