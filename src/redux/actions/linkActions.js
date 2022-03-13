import * as actionTypes from "./actionTypes";

export const linkVoteUp = (index) => ({
    type: actionTypes.LINK_VOTE_UP,
    payload: index
})

export const linkVoteDown = (index) => ({
    type: actionTypes.LINK_VOTE_DOWN,
    payload: index
})

export const linkCreate = (link) => ({
    type: actionTypes.LINK_CREATE,
    payload: link
})

export const linkLoad = () => ({
    type: actionTypes.LINK_LOAD
})

export const linkDelete = (index) => ({
    type: actionTypes.LINK_DELETE,
    payload: index
})

export const linkList = () => ({
    type: actionTypes.LINK_LIST
})