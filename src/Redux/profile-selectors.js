import React from "react";
import {createSelector} from "reselect";

export const getSingleProfile = ( state ) => {
    return state.profileRD.profile.singleProfile
};

export const getFullName = ( state ) => {
    return state.profileRD.profile.singleProfile.fullName
};


