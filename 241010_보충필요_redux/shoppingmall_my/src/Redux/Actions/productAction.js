const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://raw.githubusercontent.com/u-ulim/musinsa_product/master/db.json`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // 가장 최고 장점은 (데이터가 제대로 넘어왔는지 체크할 수 있다.)
    dispatch({ type: "GET_PRODUCT_SUCESS", payload: { data } });
  };
};

export const productAction = { getProduct };
