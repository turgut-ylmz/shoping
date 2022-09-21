import React, { useState } from "react";
import { TbGripVertical, TbGripHorizontal } from "react-icons/tb";

const Filter = () => {
  const [Category, setCategory] = useState("Markalar");
  const gramajlar = [100, 200, 250, 400, 500, 750, 1000];
  const kategoriler = [
    "Atıştırmalık",
    "Anne & Çocuk",
    "Fırsatlar",
    "Kahvaltılık",
    "Kuru Gıda",
    "Organik Meyve & Sebze",
    "Reçel & Marmelat",
    "Süt Ürünleri",
    "Yeni Ürünler",
    "Zeytinyağı",
  ];
  
  const handleClick = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="productfilter container">
      <div className="productfilter__info">
        <p>
          Anasayfa / <span>{Category}</span>
        </p>
      </div>
      <div className="productfilter__div">
        <div className="productfilter__div-select">
          <select
            className="form-select"
            aria-label="Default select example"
            onClick={(e) => handleClick(e)}
          >
            {kategoriler.map((kategori, index) => {
              <option selected>Markalar</option>;
              return (
                <option value={kategori} key={index}>
                  {kategori}
                </option>
              );
            })}
          </select>
          <select className="form-select" aria-label="Default select example">
            <option selected >Gramaj</option>
            {gramajlar.map((gramaj, index) => {
              return (
                <option value={index} key={index}>
                  {gramaj}
                </option>
              );
            })}
          </select>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheck"
            />
            <label className="form-check-label" htmlFor="flexCheck">
              Bitenleri Gösterme{" "}
            </label>
          </div>
        </div>
        <div className="productfilter__div-order">
          <TbGripVertical className="productfilter-icon" />
          <TbGripHorizontal className="productfilter-icon" />
          <select className="form-select" aria-label="Default select example">
            <option selected>Sırala</option>
            <option>Azalan Fiyatlandırma</option>
            <option>Çoğalan Fiyatlandırma</option>
          </select>
        </div>
      </div>
    </div>
    
  );
};

export default Filter;
