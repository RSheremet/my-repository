import React from "react";
import style from "./Profile"

class ProfileStatus extends React.Component {

    state = {
        isChanging: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activatedEditMode = () => {
        this.setState(({ isChanging }) => {
            return {
                isChanging: true
            }
        })
    };

    deactivatedEditMode = (e) => {
        this.setState(({isChanging}) => {
            return {
                isChanging: false
            }
        })
            this.props.sendUsersStatusThunkCreator(this.state.status);
        };

    statusIsCurrentlyChangein = (e) => {
        let text = e.target.value;
        this.setState({
            status: e.target.value
        })
    };

    render() {
        return (
            <div className={style.ProfileStatus}>
                {!this.state.isChanging &&
                <div className={style.ProfileStatus_wrapper_span}>
                    <span onDoubleClick={this.activatedEditMode}>{this.state.status ? this.state.status :  "-------"}</span>
                </div>}
                {this.state.isChanging &&
                <div className={style.ProfileStatus_wrapper_input}>
                    <input value={this.state.status ? this.state.status :  "-------"}
                           onChange={this.statusIsCurrentlyChangein}
                           onBlur={this.deactivatedEditMode}
                           autoFocus={true}
                    />
                </div>}
            </div>
        )
    }
};

export default ProfileStatus