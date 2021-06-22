import React, {useEffect, useState} from "react";

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

// type ProfileStatusStateType = {
//   editMode: boolean
//   localStatus: string
// }

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }

  const onStatusChange = (newValue: any) => { //!!!! string
    setStatus(newValue.currentTarget.value)
  }


  return (
    <div>
      {!editMode &&
			<div>
				<span onDoubleClick={activateEditMode}>{props.status || "====="}</span>
			</div>
      }
      {editMode &&
			<div>
				<input autoFocus={true}
				       onBlur={deactivateEditMode}
				       onChange={onStatusChange}
				       value={status}
				/>
			</div>
      }
    </div>
  )
}


export default ProfileStatusWithHooks;