import React from "react";
import {SiFacebook} from "react-icons/si";
import {FaInstagramSquare,} from "react-icons/fa";
import {AiFillTwitterSquare} from "react-icons/ai";
import {TbPhoneCall} from "react-icons/tb";
import karekod from "../assets/karekod.png";

const Footer = () => {
  const kurumsal = [
    "Hakkımızda",
    "Vizyon & Misyon",
    "Gizlilik Politikası",
    "KVKK Sözleşmesi",
    "Sertifikalar",
    "İletişim",
  ];
  const kategori = [
    "Sebze",
    "Süt Ürünleri",
    "Kahvaltılık",
    "Et & Tavuk",
    "Meyve",
  ];
  const fırsat = [
    "Yeni Ürünler",
    "Haftanın Fırsatları",
    "İndirimli Ürünler",
    "E-Hamal Kumbara",
  ];

  return (
    <footer className="bg-themeblue">
      <section className="footer__div container">
        <article className="footer__kurumsal col">
          <h4>Kurumsal</h4>
          {kurumsal.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
        <article className="footer__alt col">
          <h4>Kategoriler</h4>
          {kategori.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
        <article className="footer__alt1 col">
          <h4>Fırsatlar</h4>
          {fırsat.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
        <div className="footer__media col">
          <img src={karekod} alt="karekod" />
          <div>
            <div className="d-flex ">
              <TbPhoneCall /> <p>0 212 00 02 00</p>
            </div>
            <div>
              <SiFacebook className="footer__icon" />
              <FaInstagramSquare className="footer__icon " />
              <AiFillTwitterSquare className="footer__icon " />
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <h5>
          <span className="text-success mx-2">TurgutYLMZ</span>
        </h5>
      </section>
    </footer>
  );
};

export default Footer;
