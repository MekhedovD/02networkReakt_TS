import React from "react";

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

type ProfileStatusStateType = {
  editMode: boolean
  localStatus: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
  state = {
    editMode: false,
    localStatus: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.localStatus);
  }

  onStatusChange = (newValue: any) => { //!!!! string
    this.setState({
      localStatus: newValue.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        localStatus: this.props.status
      });
    }
    console.log("componentDidUpdate")
  }

  render() {
    console.log("render")
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "====="}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true}
                   onBlur={this.deactivateEditMode}
                   value={this.state.localStatus}
                   onChange={this.onStatusChange}
            />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;