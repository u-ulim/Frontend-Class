let initialState = { productList: [] };

const productReducer = (state = initialState, action) => {
  console.log(action);
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case "GET_PRODUCT_SUCESS":
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
};

export default productReducer;
