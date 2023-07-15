const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default reducer;
