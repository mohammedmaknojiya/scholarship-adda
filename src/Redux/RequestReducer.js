import * as actionType from "./ActionTypes";
import { requestData } from "./FetchData/requestData";
import { useDispatch } from "react-redux";
import { addApproveScholarship } from "./ActionCreators";

const RequestReducer = (state = { reqData: requestData }, action) => {
  // const dispatch = useDispatch();
  switch (action.type) {
    case actionType.ADD_SCHOLARSHIP:
      const sch_details = action.payload;
      const initData = [...state.reqData];
      const result = [
        ...initData,
        {
          ...sch_details,
          sch_id: initData.length + 1,
          active_inactive: "yes",
          person: {
            name: "mohammed",
            email: "ab@gmail.com",
            contact_no: "8888888888",
          },
        },
      ];
      return { reqData: [...result] };

    case actionType.DIS_APPROVE_SCHOLARSHIP:
      const s_id = parseInt(action.payload);
      const inData = [...state.reqData];
      const finalData = inData.filter((obj) => {
        return obj.sch_id !== s_id;
      });
      return { reqData: [...finalData] };

    case actionType.APPROVE_SCHOLARSHIP:
      const sch_id = parseInt(action.payload);
      const intData = [...state.reqData];
      const res = intData.filter((obj) => {
        return obj.sch_id !== sch_id;
      });
      const app_sch = intData.find((obj) => {
        return obj.sch_id === sch_id;
      });
      console.log(
        "Write query for adding this scholarship in data table",
        app_sch
      );
      // dispatch(addApproveScholarship(app_sch));
      return { reqData: [...res] };

    default:
      return { ...state };
  }
};

export default RequestReducer;
