import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./User.module.css";
import {v1} from "uuid";

export type UsersPropsType = {
  users: Array<UsersType>
  unfollow: (id: string) => void
  follow: (id: string) => void
  // setUsers: Array<UsersType>
}

const Users = (props: UsersPropsType) => {

  {/*props.setUsers([*/}
  {/*  {*/}
  {/*    followed: false,*/}
  {/*    fullName: "Dmitry",*/}
  {/*    status: "I am boss",*/}
  //     location: {city: "Minsk", country: "Belarus"},
  //     photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
  //     id: v1()
  //   },
  //   {
  //     followed: false,
  //     fullName: "Andry",
  //     status: "I am boss too",
  {/*    location: {city: "Minsk", country: "Belarus"},*/}
  {/*    photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",*/}
  //     id: v1()
  //   },
  //   {
  //     followed: false,
  //     fullName: "Joanna",
  //     status: "I am boss too",
  //     location: {city: "Minsk", country: "Belarus"},
  //     photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
  //     id: v1()
  //   }])

    return (
    <div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)}
    </div>
  )
};

  export default Users;