import LinkService from "../../services/linkServices";
import linkReducer from "./linkReducer";
import * as actionTypes from "../actions/actionTypes";

jest
.useFakeTimers()
.setSystemTime(new Date('2021-03-13').getTime());

const list = LinkService.load();
const today = new Date('2021-03-13').getTime()


test("should return the initial state", () => {
  expect(linkReducer(undefined, {})).toEqual(list);
});

test("add array to list", () => {
  const successAction = {
    type: actionTypes.LINK_CREATE,
    payload: {
      id: 1,
      linkName: "LinkName",
      linkUrl: "LinkUrl",
      points: 0,
      updateDate: 1234,
    },
  };
  expect(linkReducer([], successAction)).toEqual([
    {
      id: 1,
      linkName: "LinkName",
      linkUrl: "LinkUrl",
      points: 0,
      updateDate: today,
    },
  ]);
});

test("should delete the object in the list", () => {
  const successAction = {
    type: actionTypes.LINK_DELETE,
    payload: 1,
  };
  expect(
    linkReducer(
      [
        {
          id: 1,
          linkName: "LinkName",
          linkUrl: "LinkUrl",
          points: 0,
          updateDate: 1234,
        },
      ],
      successAction
    )
  ).toEqual([]);
});

test("It should increase the vote attribute of the object with x id in the list", () => {
  const successAction = {
    type: actionTypes.LINK_VOTE_UP,
    payload: 1,
  };
  expect(
    linkReducer(
      [
        {
          id: 1,
          linkName: "LinkName",
          linkUrl: "LinkUrl",
          points: 0,
          updateDate: 1234,
        },
      ],
      successAction
    )
  ).toEqual([
    {
      id: 1,
      linkName: "LinkName",
      linkUrl: "LinkUrl",
      points: 1,
      updateDate: today,
    },
  ]);
});

test("It should decrease the vote attribute of the object with x id in the list", () => {
  const successAction = {
    type: actionTypes.LINK_VOTE_DOWN,
    payload: 1,
  };
  expect(
    linkReducer(
      [
        {
          id: 1,
          linkName: "LinkName",
          linkUrl: "LinkUrl",
          points: 5,
          updateDate: 1234,
        },
      ],
      successAction
    )
  ).toEqual([
    {
      id: 1,
      linkName: "LinkName",
      linkUrl: "LinkUrl",
      points: 4,
      updateDate: today,
    },
  ]);
});

test("sort the list by points ascending", () => {
  const successAction = {
    type: actionTypes.LINK_SORT,
    payload: "less",
  };
  expect(
    linkReducer(
      [
        {
          id: 1,
          linkName: "LinkName",
          linkUrl: "LinkUrl",
          points: 5,
          updateDate: 1234,
        },
        {
          id: 2,
          linkName: "LinkName2",
          linkUrl: "LinkUrl2",
          points: 4,
          updateDate: 1235,
        },
      ],
      successAction
    )
  ).toEqual([
    {
      id: 2,
      linkName: "LinkName2",
      linkUrl: "LinkUrl2",
      points: 4,
      updateDate: 1235,
    },
    {
      id: 1,
      linkName: "LinkName",
      linkUrl: "LinkUrl",
      points: 5,
      updateDate: 1234,
    },
  ]);
});

test("sort the list by points descending", () => {
  const successAction = {
    type: actionTypes.LINK_SORT,
    payload: "most",
  };
  expect(
    linkReducer(
      [
        {
          id: 1,
          linkName: "LinkName",
          linkUrl: "LinkUrl",
          points: 4,
          updateDate: 1234,
        },
        {
          id: 2,
          linkName: "LinkName2",
          linkUrl: "LinkUrl2",
          points: 5,
          updateDate: 1235,
        },
      ],
      successAction
    )
  ).toEqual([
    {
      id: 2,
      linkName: "LinkName2",
      linkUrl: "LinkUrl2",
      points: 5,
      updateDate: 1235,
    },
    {
      id: 1,
      linkName: "LinkName",
      linkUrl: "LinkUrl",
      points: 4,
      updateDate: 1234,
    },
  ]);
});

test("if the points are equal in the ranking, the last player should be on top", () => {
  const successAction = {
    type: actionTypes.LINK_SORT,
    payload: "most",
  };
  expect(
    linkReducer(
      [
        {
          id: 1,
          linkName: "LinkName",
          linkUrl: "LinkUrl",
          points: 4,
          updateDate: 1234,
        },
        {
          id: 2,
          linkName: "LinkName2",
          linkUrl: "LinkUrl2",
          points: 4,
          updateDate: 1235,
        },
      ],
      successAction
    )
  ).toEqual([
    {
      id: 2,
      linkName: "LinkName2",
      linkUrl: "LinkUrl2",
      points: 4,
      updateDate: 1235,
    },
    {
      id: 1,
      linkName: "LinkName",
      linkUrl: "LinkUrl",
      points: 4,
      updateDate: 1234,
    },
  ]);
});
