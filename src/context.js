import { createContext, useState } from "react";

/* ###### START OF INITIAL STATE ###### */

// Holds the current post state
const _statePost = {
    "id": null,
    "title": "",
    "body": "",
    "updatedAt": ""
}

// Holds the post history
const _statePostHistory = []

// Loading state
const _stateLoading = true;

// Keep track of which post we're looking for
const _stateNextId = 0;

// Blog info
const _stateBlogInfo = {
    "name": "",
    "contact": ""
};

/* ###### END OF INITIAL STATE ###### */

// Creates a new context
const AppContext = createContext(null);

export {
    AppContext,
    _statePost,
    _statePostHistory,
    _stateLoading,
    _stateNextId,
    _stateBlogInfo
}