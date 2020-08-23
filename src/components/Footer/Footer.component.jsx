import React from "react";
import { Link } from "react-router-dom";

import { FootContainer, FootButton } from "./Footer.style";

const Footer = () => (
  <FootContainer>
    <FootButton>
      <Link to="/contato">Entre em Contato / Apoie o site</Link>
    </FootButton>
    <a
      href="https://www.corinthians.com.br"
      target="blank"
      rel="noopener noreferrer"
    >
      Site criado por torcedores. Clique aqui para acessar o site oficial do
      Corinthians.
    </a>
  </FootContainer>
);

export default Footer;
