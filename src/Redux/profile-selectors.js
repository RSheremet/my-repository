import React from "react";
import {createSelector} from "reselect";

export const getSingleProfile = ( state ) => {
    return state.profileRD.singleProfile
};

export const getFullName = ( state ) => {
    return state.profileRD.singleProfile.fullName
};


