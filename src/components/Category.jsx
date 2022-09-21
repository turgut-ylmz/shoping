import React from "react";
import { FaEgg } from "react-icons/fa";
import {
  GiCheeseWedge,
  GiSlicedBread,
  GiOlive,
  GiSausage,
  GiHoneyJar,
  GiHoneypot,
  GiMasonJar,
  GiTeapotLeaves} from "react-icons/gi";
import {GoMegaphone} from "react-icons/go";

const Category = () => {
  return (
    <div className="category container ">
      <div className="navbar_ctg-info mt-4">
        <div>
          <h3>Kahvaltılık</h3>
          <p>E-Hamal'da Kumbara sistemi var. Yaptığın alışverişlerden Türk Lirası
            biriktir. Kazandığın<br/><br/> paralarla tekrar alışveriş yap.</p>
        </div>
      </div>
      
      <div className="navbar_ctg1 container mt-4">
      <div className="navbar_ctg-div1  ">
        <FaEgg className="navbar-icon1" />
        <p value="Yumurta" className="navbar-text1">
          Süt Ürünleri & Yumurta</p>
      </div>
      <div className="navbar_ctg-div1 ">
        <GiCheeseWedge className="navbar-icon1" />
        <p>Peynir</p>
      </div>
      <div className="navbar_ctg-div1 ">
        <GiSlicedBread className="navbar-icon1" />
        <p>Unlu Mamüller</p>
      </div>
      <div className="navbar_ctg-div1">
        <GiOlive className="navbar-icon1" />
        <p>Zeytin</p>
      </div>
      <div className="navbar_ctg-div1 ">
        <GiSausage className="navbar-icon1" />
        <p>Sucuk & Pastırma</p>
      </div>
      <div className="navbar_ctg-div1">
        <GiHoneyJar className="navbar-icon1" />
        <p>Reçel & Marmelat</p>
      </div>
      <div className="navbar_ctg-div1">
        <GiHoneypot className="navbar-icon1" />
        <p>Bal & Arı Ürünleri</p>
      </div>
      <div className="navbar_ctg-div1">
        <GoMegaphone className="navbar-icon1 " />
        <p>Fırsat Köşesi</p>
      </div>
      <div className="navbar_ctg-div1 ">
        <GiMasonJar className="navbar-icon1" />
        <p>Tahin-Pekmez & Helva</p>
      </div>
      <div className="navbar_ctg-div1">
        <GiTeapotLeaves className="navbar-icon1" />
        <p>Çay & Meyve Suyu</p>
      </div>
    </div><br/><br/><br/>
    </div>
    
  );
};

export default Category;