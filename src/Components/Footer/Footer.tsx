import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Container, CopyrightText } from "./style";

interface Props {}

const Footer: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Container>
                <div className="container">
                    <div className="sec aboutus">
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsam est non veniam
                            iusto temporibus? Possimus qui porro suscipit ut ipsam deleniti reprehenderit, doloribus
                            corporis neque maxime quisquam recusandae ipsa.
                        </p>

                        <ul className="sci">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon className="fa" icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon className="fa" icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon className="fa" icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon className="fa" icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="sec contact">
                        <h2> Contact Info </h2>
                        <ul className="info">
                            <li>
                                <span>
                                    <FontAwesomeIcon className="fa" icon={faMapMarker} />
                                </span>
                                <p>
                                    647 Linda Street Phoenixvill, PA 19460, <br />
                                    USA
                                </p>
                            </li>

                            <li>
                                <span>
                                    <FontAwesomeIcon className="fa" icon={faPhone} />
                                </span>
                                <p>
                                    <a href="tel:123456789">+1 234 567 8900</a> <br />
                                    <a href="tel:123456789">+1 234 567 8900</a>
                                </p>
                            </li>

                            <li>
                                <span>
                                    <FontAwesomeIcon className="fa" icon={faEnvelope} />
                                </span>
                                <p>
                                    <a href="mailto:knowmore@email.com"> knowmore@email.com </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <CopyrightText>
                <p>Copyright 2021 PIB - Pirajuí. Todos direitos reservados.</p>
            </CopyrightText>
        </>
    );
};

export default Footer;
