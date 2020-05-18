import React, {useEffect, useState} from "react";
import style from "./ProfileInfo"

const ProfileStatusWithHooks = ( props ) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    let activatedEditMode = () => {
        setEditMode(true);
    };

    let deactivateEditMode = (e) => {
        setEditMode(false);
        props.sendUsersStatusThunkCreator(status);
    };

    let changeStatus = (e) => {
        let text = e.target.value;
        setStatus(text);
    }

    return (
        <div className={style.ProfileStatus}>

            {!editMode &&
                <div className={style.ProfileStatus_wrapper_span}>
                    <span onDoubleClick={ activatedEditMode }>{props.status ? status : "-----"}</span>
                </div>
            }

            {editMode &&
                <div className={style.ProfileStatus_wrapper_input}>
                    <input
                        autoFocus={true}
                        onBlur={ deactivateEditMode }
                        value={status}
                        onChange={ changeStatus }
                    />
                </div>
            }
        </div>
    )

};

export default ProfileStatusWithHooks