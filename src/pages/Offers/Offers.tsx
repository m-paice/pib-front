import React from "react";

// components
import BoxOffers from "../../components/BoxOffers";

import SantanderLogo from "../../assets/imagens/santander-logo.png";

const data = Array.from(Array(4));

const Offers: React.FC = () => {
    return (
        <div className="page ofertas">
            {data.map((_, index) => (
                <BoxOffers
                    key={index}
                    title="Titulo e titulo e titulo e titulo"
                    text="Lorem ipsum dolor sit ames, consectetur adipisicing elit, sed do eiusmod tem por
                incididunt ut labore et dobre magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco Ia boris nisi ut a liquip ex ea commodo consequat. Duis a ute irure
                dolor in reprehenderit in voluptate velit esse cillum dobre eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                molli"
                    srcImage={SantanderLogo}
                />
            ))}
        </div>
    );
};

export default Offers;
