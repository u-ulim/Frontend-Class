const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/jbbok/musinsamall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

export const productAction = { getProduct };
