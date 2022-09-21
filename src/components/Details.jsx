import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
//herhangi bir componentin Meta Etiketlerini ayarlamanızı ve tanımlamanızı sağlayan bir kütüphanedir. Alışılanın aksine, HTML tabanlı bir web sayfasında olduğu gibi, React tabanlı bir web sitesinde varsayılan olarak Meta datalar ve başlıklar tanımlanamaz.


const Details = () => {
  const { state } = useLocation();
  const { name, organic ,img,description, money} = state[0];
  return (
    <div className="details container">
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="card mb-3">
        <div className="title g-0">
          <div >
            <img
                    alt={name}
                    src={img}
                    className="card__image"
                  />
          </div>
          <div >
            <article className="card-body">
              <h3 className="card-title">{name} </h3>
              <p className="card-text">{description}</p>
              <p className="card-text">
                {organic.map((item) => {
                  return <span>{item}</span>;
                })}
              </p>
              <section className="money">
                <h2>{money} ₺</h2>
                <button className="card_button"> Satın Al</button>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;