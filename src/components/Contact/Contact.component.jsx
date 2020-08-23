import React, { useState } from "react";

import { toast } from "react-toastify";

import {
  ContactContainer,
  ContactText,
  ContactForm,
  Donation,
  Paypal,
  MercadoPago,
  DonationOptions,
} from "./Contact.style";
import img_form from "../../assets/images/form2.jpg";
import logo_mercadopago from "../../assets/images/logo_mercadopago.png";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    textArea: "",
  });

  const notifySuccess = () => toast.info("Thanks for your message! ");
  const notifyError = () => toast.error("Something went wrong");

  const handleOnChange = (e) => {
    e.persist();

    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleResponse = (resStatus, msg) => {
    if (resStatus === 200) {
      notifySuccess();
    } else {
      notifyError();
    }
    if (process.env.NODE_ENV === "development") {
      console.log(resStatus, msg);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://videoblog-mail-api.vercel.app/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();

    handleResponse(res.status, text);
  };

  return (
    <ContactContainer>
      <ContactText>
        Get in touch through the form below
      </ContactText>
      <ContactForm>
        <img src={img_form} alt="" />
        <form onSubmit={handleOnSubmit}>
          <h1>Contato</h1>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleOnChange}
          />
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleOnChange}
          />
          <textarea
            name="message"
            type="text"
            id="textArea"
            rows="10"
            placeholder="Message"
            value={inputs.textArea}
            onChange={handleOnChange}
          />
          <input type="submit" value="Enviar" />
        </form>
      </ContactForm>
      <Donation>
        <p>
          Show your love and support the website
        </p>
        <DonationOptions>
          <Paypal>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="SAY3Q9XJW9EJA" />
              <input type="hidden" name="currency_code" value="BRL" />
              <input
                type="image"
                src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Faça doações com o botão do PayPal"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </Paypal>
          <MercadoPago>
            <a
              href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=94889478-12fe4181-b6b4-4180-a94b-a4a01b26615a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img srcSet={logo_mercadopago} alt="" />
            </a>
          </MercadoPago>
        </DonationOptions>
      </Donation>
    </ContactContainer>
  );
};

export default Contact;
