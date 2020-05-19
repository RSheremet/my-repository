import React from "react";

export const updateObjectInArray = (items, objPropName, itemId, newObjProps) => {
    return items.map( u => {
        if (objPropName === itemId) {
            return {...u, ...newObjProps}
        }
    })
};
