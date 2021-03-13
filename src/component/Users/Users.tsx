import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./User.module.css";
// import {v1} from "uuid";
import axios from "axios";
import UsersPhoto from "../../assets/images/img.png"

export type UsersPropsType = {
  users: Array<UsersType>
  unfollow: (id: number) => void
  follow: (id: number) => void
  setUser: (users: Array<UsersType>) => void
}

const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUser(response.data.items)
      })
  }


  // [
  // { followed: false,
  //   fullName: "Dmitry",
  //  status: "I am boss",
  //    location: {city: "Minsk", country: "Belarus"},
  //    photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
  //  id: v1()
  //  },
  //  {
  //    followed: false,
  //    fullName: "Andry",
  //    status: "I am boss too",
  //   location: {city: "Minsk", country: "Belarus"},
  //   photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
  //    id: v1()
  //  },
  //  {
  //    followed: false,
  //    fullName: "Joanna",
  //    status: "I am boss too",
  //    location: {city: "Minsk", country: "Belarus"},
  //    photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
  //    id: v1()
  //  }])
debugger
  return (
    <div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small !== null ? u.photos.small : UsersPhoto} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
};

export default Users;