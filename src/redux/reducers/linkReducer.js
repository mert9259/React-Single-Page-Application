import LinkService from "../../services/linkServices";
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const voteReducer = (state = initialState.initLinkList, action) => {
  let linkList = state;

  switch (action.type) {
    case actionTypes.LINK_VOTE_UP:
      linkList = linkList.map((item, index) => {
        if (index === action.payload) item.points++;
        return item;
      });
      LinkService.save(linkList);
      return linkList;

    case actionTypes.LINK_VOTE_DOWN:
      linkList = linkList.map((item, index) => {
        if (index === action.payload) item.points--;
        return item;
      });
      LinkService.save(linkList);
      return linkList;

    case actionTypes.LINK_DELETE:
      linkList = linkList.filter((item, index) => index != action.payload);
      LinkService.save(linkList);
      return linkList;

    case actionTypes.LINK_CREATE:
      linkList = [action.payload, ...linkList];
      LinkService.save(linkList);
      return linkList;

    default:
      return linkList;
  }
};

export default voteReducer;
