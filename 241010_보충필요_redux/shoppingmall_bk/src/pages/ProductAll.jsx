import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productAction } from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    // console.log(searchQuery);
    dispatch(productAction.getProduct(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col key={index} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
