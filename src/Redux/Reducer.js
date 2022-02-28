import * as actionType from "./ActionTypes";
import { data } from "./FetchData/data";

const Reducer = (state = { data: data }, action) => {
  switch (action.type) {
    // case actionType.ADD_SCHOLARSHIP:
    //   return { ...state };
    case actionType.REMOVE_SCHOLARSHIP:
      const id = parseInt(action.payload);
      const initData = [...state.data];
      const result = initData.filter((obj) => {
        return obj.sch_id !== id;
      });
      return { data: [...result] };

    case actionType.CHANGE_STATUS_ACTIVE:
      const s_id = parseInt(action.payload);
      let iniData = [...state.data];
      iniData.forEach((obj) => {
        if (obj.sch_id === s_id) {
          obj.active_inactive = "yes";
        }
      });
      return { data: [...iniData] };

    case actionType.CHANGE_STATUS_INACTIVE:
      const sh_id = parseInt(action.payload);
      let initialData = [...state.data];
      initialData.forEach((obj) => {
        if (obj.sch_id === sh_id) {
          obj.active_inactive = "no";
        }
      });
      return { data: [...initialData] };

    case actionType.ADD_APPROVE_SCHOLARSHIP:
      const sch_data = action.payload;
      console.log("from inside", sch_data);
      return { ...state };

    default:
      return { ...state };
  }
};

export default Reducer;
