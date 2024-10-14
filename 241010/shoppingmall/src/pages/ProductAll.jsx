// import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";

import { productAction } from "../Redux/Actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams(); // setQuery는 필요 없음
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    // const url = `https://raw.githubusercontent.com/u-ulim/musinsa_product/master/db.json`;
    // const response = await fetch(url);
    // const data = await response.json();

    // console.log(data); // 데이터 구조 확인

    // // 'products' 배열에 접근
    // const products = data.products || [];

    // const filteredData = products.filter((product) =>
    //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // setProductList(filteredData);
    dispatch(productAction.getProduct(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {/* {productList.map((menu, index) => (
          <Col key={index} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))} */}
      </Row>
    </Container>
  );
};

export default ProductAll;
