import React, { useEffect } from "react";
import Category from "../components/Category";
import Info from "../components/Info";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../components/Slice";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import SeoField from "../components/SeoField";

const Home = () => { 
  const dispatch = useDispatch();
  const { productsList, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Category />
          <Filter />
          <Info productsList={productsList} />
          <SeoField />
        </div>
      )}
    </>
  );
};

export default Home;
