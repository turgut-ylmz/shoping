import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiSearchAlt, BiBookmarkAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
//React Router Dom. React Router kütüphanesi sayfalar arasında gezinmek için bize etkin bir yol sunar.
import NavbarCategory from "./Navbar";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header__title">
        <div className="container">
          <section className="header__title-home" onClick={() => navigate("/")}>
            <h1>Shopping</h1>
          </section>
          <section className="header__title-lists">
            <ul>
              <li>Üreticilerimiz</li>
              <li>Organik Sertifikası</li>
              <li>Fırsatlar Köşesi</li>
            </ul>
          </section>
        </div>
      </div>

      <nav className="navbar my-2">
        <div className="container">
          <div className="deneme"></div>
          <div className="navbar__search input-group mb-3">
            <input type="text" className="form-control" />
            <button className="btn btn-outline-secondary">
              <BiSearchAlt />
            </button>
          </div>
          <div className="navbar__user">
            <HiOutlineShoppingCart className="icon" />
            <BiBookmarkAlt className="icon" />
            <FaRegUser className="icon" />
          </div>
        </div>

        <NavbarCategory />
      </nav>
    </header>
  );
};

export default Header;