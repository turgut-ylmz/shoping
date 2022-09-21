import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Info = ({ productsList }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isShow, setIsShow] = useState(true);
  const handleClick = async (id) => {
    const navigateToDetail = await productsList?.filter(
      (product) => product.id === id
    ); 
    await navigate("/product", { state: navigateToDetail }); 
  };

  const handlePage = (e) => {
    let number = Number(e.target.value);
    setItems(productsList?.slice(16 * number - 16, 16 * number));
    setIsShow(false);
  };
  return (
    <div>
      <div className="productlist container">
        {isShow
          ? productsList?.slice(0, 16).map((product, index) => {
              return (
                <div
                  className="card"
                  onClick={() => handleClick(product.id)}
                  key={index}
                >
                  <Helmet>
                    <title>{product.situation}</title>
                    <meta name="description" content={product.situation} />
                  </Helmet>
                  <img
                    alt={product.name}
                    src={product.img}
                    className="card__image"
                  />
                  <div className="card__info p-1 text-center">
                    <h5 className="hoverpurple">{product.name}</h5>
                    <p className="fs-6">500 GR</p>
                    <p className="text-decoration-line-through">
                      {Number(product.money) + 3.5} ₺
                    </p>
                    <p className="fs-3 hoverpurple">{product.money} ₺</p>
                  </div>
                  <div className="card__over">
                    <div>
                      {product.organic.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </div>
                    <p>+</p>
                  </div>
                </div>
              );
            })
          : items?.map((product, index) => {
              return (
                <div
                  className="card"
                  onClick={() => handleClick(product.id)}
                  key={index}
                >
                  <Helmet>
                    <title>{product.situation}</title>
                    <meta name="description" content={product.situation} />
                  </Helmet>
                  <img
                    alt={product.name}
                    src={product.img}
                    className="card__image"
                  />
                  <div className="card__info p-1 text-center">
                    <h5 className="hoverpurple">{product.name}</h5>
                    <p className="fs-6">300 GR</p>
                    <p className="text-decoration-line-through">
                      {Number(product.money) + 5} ₺
                    </p>
                    <p className="fs-3 hoverpurple">{product.money} ₺</p>
                  </div>
                  <div className="card__over">
                    <div>
                      {product.organic.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </div>
                    <p>+</p>
                  </div>
                </div>
              );
            })}

        <div onClick={(e) => handlePage(e)} className="list__pagination">
          <button value="1">1</button><button value="2">2</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
