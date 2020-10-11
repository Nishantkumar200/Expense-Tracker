export default (state, action) => {
  switch (action.type) {
    case "Add_Transaction":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
