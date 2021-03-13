import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./User.module.css";
import axios from "axios";
import UsersPhoto from "../../assets/images/img.png"

export type UsersPropsType = {
  users: Array<UsersType>
  unfollow: (id: number) => void
  follow: (id: number) => void
  setUser: (users: Array<UsersType>) => void
}

class Users extends React.Component<UsersPropsType> {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUser(response.data.items)
      })
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small !== null ? u.photos.small : UsersPhoto} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
        </div>)}
      </div>
    )
  }
}

export default Users;