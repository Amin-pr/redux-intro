import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerslice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            //sideeffects mustnot placed in reducers instead placd them in prepare functio ,
            // even if it takes only one argument place them in prepare func
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCustomer(state, action) {
      state.fullName = action.payload ;
    },
  },
});

export const { createCustomer, updateCustomer } = customerslice.actions;
export default customerslice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateCustomer":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateCustomer", payload: fullName };
// }
