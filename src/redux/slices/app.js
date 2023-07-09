import { createSlice } from "@reduxjs/toolkit";

//
import { dispatch } from "../store";

const initialState = {
  sideBar: {
    open: false,
    type: "CONTACT", //can be CONTACT ,STARRED ,SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // toggle sidebar
    toggleSideBar(state, action) {
      state.sideBar.open = !state.sideBar.open;
    },
    updateSideBarType(state, action) {
      state.sideBar.type = action.payload.type;
    },
  },
});

//reducer
export default slice.reducer;

//
export function ToggleSideBar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSideBar());
  };
}
export function UpdateSideBarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSideBarType({
        type,
      })
    );
  };
}
