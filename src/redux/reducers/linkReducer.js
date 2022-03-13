import LinkService from "../../services/linkServices";
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const voteReducer = (state = initialState.initLinkList, action) => {
  let linkList = state;

  switch (action.type) {
    case actionTypes.LINK_VOTE_UP:
      linkList = linkList.map((item) => {
        if (item.id === action.payload) item.points++;
        return item;
      });
      LinkService.save(linkList);
      return linkList;

    case actionTypes.LINK_VOTE_DOWN:
      linkList = linkList.map((item) => {
        if (item.id === action.payload) item.points--;
        return item;
      });
      LinkService.save(linkList);
      return linkList;

    case actionTypes.LINK_DELETE:
      linkList = linkList.filter((item) => item.id != action.payload);
      LinkService.save(linkList);
      return linkList;

    case actionTypes.LINK_CREATE:
      let lastId = LinkService.getLastId() + 1;
      linkList = [{id: lastId,...action.payload}, ...linkList];
      LinkService.saveLastId(lastId);
      LinkService.save(linkList);
      return linkList;

    default:
      return linkList;
  }
};

export default voteReducer;
