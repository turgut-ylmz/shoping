import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsFillBasketFill, BsEggFried } from "react-icons/bs";
import { GiFruitBowl, GiWorld , GiAerodynamicHarpoon} from "react-icons/gi";
import { TbPaperBag, TbVaccineBottle } from "react-icons/tb";
import { MdFoodBank, MdOutlineFamilyRestroom } from "react-icons/md";


const Navbar = () => {
  return (
    <div className="navbar__category container mt-4">
      <div className="navbar__category-div ">
        <BsFillBasketFill className="navbar-icon" />
        <p value="Markalarımız" >
          Markalarımız
        </p>
      </div>
      <div className="navbar__category-div">
        <GiFruitBowl className="navbar-icon" />
        <p> Organik Meyve & Sebze</p>
      </div>
      <div className="navbar__category-div">
        <BsEggFried className="navbar-icon" />
        <p>Kahvaltılık</p>
      </div>
      <div className="navbar__category-div">
        <TbPaperBag className="navbar-icon" />
        <p>Atıştırmalık</p>
      </div>
      <div className="navbar__category-div">
        <TbVaccineBottle className="navbar-icon" />
        <p>Zeytinyağı</p>
      </div>
      <div className="navbar__category-div">
        <MdFoodBank className="navbar-icon" />
        <p>Kuru Gıda</p>
      </div>
      <div className="navbar__category-div">
        <GiWorld className="navbar-icon" />
        <p>Organik</p>
      </div>
      <div className="navbar__category-div">
        <MdOutlineFamilyRestroom className="navbar-icon " />
        <p>Anne & Çocuk</p>
      </div>
      <div className="navbar__category-div">
        <GiAerodynamicHarpoon className="navbar-icon" />
        <p>Yeni Ürünler</p>
      </div>
      <div className="navbar__category-div">
        <FaRegThumbsUp className="navbar-icon" />
        <p>Fırsatlar</p>
      </div>
    </div>
  );
};

export default Navbar;
