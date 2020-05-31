import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import ChangeSettings from "./Settings";
import {sendUserProfileInfoTC} from "../../Redux/profile-reducer";
import {getUserId} from "../../Redux/auth-selectors";



class SettingsContainer extends React.Component {

    render() {
        return (
            <ChangeSettings
                sendUserProfileInfoTC={this.props.sendUserProfileInfoTC}
                userId={this.props.userId}
            />
        )
    }

}

const mapStateToProps = ( state ) => {

    return {
        userId: getUserId(state)
    }

};

export default compose(
    connect(mapStateToProps, {sendUserProfileInfoTC})
)(SettingsContainer);