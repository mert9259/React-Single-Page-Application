import LinkService from "../../services/linkServices";
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const linkReducer = (state = initialState.initLinkList, action) => {
  let linkList = state;

  switch (action.type) {
    case actionTypes.LINK_VOTE_UP:
      linkList = state.map((item) => {
        if (item.id === action.payload) {
          item.points++;
          item.updateDate = new Date().getTime();
        }
        return item;
      });
      LinkService.save([...linkList]);
      return linkList;

    case actionTypes.LINK_VOTE_DOWN:
      linkList = linkList.map((item) => {
        if (item.id === action.payload) {
          item.points--;
          item.updateDate = new Date().getTime();
        }
        return item;
      });
      LinkService.save([...linkList]);
      return linkList;

    case actionTypes.LINK_DELETE:
      linkList = linkList.filter((item) => item.id != action.payload);
      LinkService.save([...linkList]);
      return linkList;

    case actionTypes.LINK_CREATE:
      let lastId = LinkService.getLastId() + 1;
      linkList = [
        { id: lastId, ...action.payload, updateDate: new Date().getTime() },
        ...linkList,
      ];
      LinkService.saveLastId(lastId);
      LinkService.save([...linkList]);
      return linkList;

    case actionTypes.LINK_SORT:
      return [...linkList].sort((a, b) => {
        if (action.payload == "most")
          return b.points != a.points
            ? b.points - a.points
            : b.updateDate - a.updateDate;
        else
          return a.points != b.points
            ? a.points - b.points
            : b.updateDate - a.updateDate;
      });

    default:
      return linkList;
  }
};

export default linkReducer;
