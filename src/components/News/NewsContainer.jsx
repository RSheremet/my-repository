import React from 'react';
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import News from "./News";
import {connect} from "react-redux";
import {AuthRedirectComponent} from "../hoc/AuthRedirectComponent";


class NewsContiner extends React.Component {

    render() {
        return (
            <News />
        )
    }

}
const mapStateToProps = ( state ) => {

    return {

    }

};

export default compose(
    connect(mapStateToProps, {})
)(NewsContiner);