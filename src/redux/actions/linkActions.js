import * as actionTypes from "./actionTypes";

export const linkVoteUp = (id) => ({
    type: actionTypes.LINK_VOTE_UP,
    payload: id
})

export const linkVoteDown = (id) => ({
    type: actionTypes.LINK_VOTE_DOWN,
    payload: id
})

export const linkCreate = (link) => ({
    type: actionTypes.LINK_CREATE,
    payload: link
})

export const linkDelete = (id) => ({
    type: actionTypes.LINK_DELETE,
    payload: id
})

export const linkSort = (type) => ({
    type: actionTypes.LINK_SORT,
    payload: type
})