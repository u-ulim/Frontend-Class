let initialState = {
  contactList: [
    {
      id: 1,
      name: "Dk",
      phoneNumber: "01010101000000",
    },
    {
      id: 2,
      name: "Dk2",
      phoneNumber: "01010101000000",
    },
    {
      id: 3,
      name: "Dk3",
      phoneNumber: "01010101000000",
    },
  ],
  keyword: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    // return {
    //   // 초기의 state 가져오고
    //   ...state,
    //   // 그 중에서 contactList만 변경해야하니까
    //   contactList: [
    //     // 그 안의 contactList안의 객체는 그대로 가고
    //     ...state.contactList,
    //     // 추가 되는 값은 아래
    //     {
    //       name: payload.name,
    //       phoneNumber: payload.phoneNumber,
    //     },
    //   ],
    // };
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
    // return {
    //   ...state,
    //   keyword: payload.keyword,
    // };
    // default:
    // return { ...state };
  }
  return { ...state };
};

export default reducer;

// const userList = [
//   {
//     id: 1,
//     name: "Dk",
//     number: "01010101000000",
//   },
//   {
//     id: 2,
//     name: "Dk2",
//     number: "01010101000000",
//   },
//   {
//     id: 3,
//     name: "Dk3",
//     number: "01010101000000",
//   },
// ];
