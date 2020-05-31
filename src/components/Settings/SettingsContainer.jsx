import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import ChangeSettings from "./Settings";


class SettingsContainer extends React.Component {

    render() {
        return (
            <ChangeSettings

            />
        )
    }

}

const mapStateToProps = ( state ) => {

    return {

    }

};

export default compose(
    connect(mapStateToProps, {})
)(SettingsContainer);