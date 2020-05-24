import React, {Suspense} from "react";


export const LazyLoadHocComponent = (Component) => {

    const LazyComponent = (props) => {

        return <Suspense fallback={<h1>Loading profile...</h1>}>
                <Component />
            </Suspense>


    };

    return LazyComponent

};