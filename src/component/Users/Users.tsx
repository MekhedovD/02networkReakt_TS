import s from "./User.module.css";
import UsersPhoto from "../../assets/images/img.ava.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
  users: Array<UsersType>
  unfollow: (id: number) => void
  follow: (id: number) => void
  onPageChanged: (p: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  // toggleFollowingProgress: (isLoading: boolean, userId: number) => void
  followingInProgress: Array<number>
}

const Users = (props: UsersPropsType) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div>

      <div>
        {pages.map(p => {
          return <span onClick={(e) => props.onPageChanged(p)}
                       className={p === props.currentPage ? s.selectedPage : ""}>| {p} |</span>
        })}
      </div>

      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small !== null ? u.photos.small : UsersPhoto} className={s.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button disabled={props.followingInProgress
                .some(id => id === u.id)}
                        onClick={() => {props.unfollow(u.id)}}>Unfollow</button>

              : <button disabled={props.followingInProgress
                .some(id => id === u.id)}
                        onClick={() => {props.follow(u.id)} }>Follow</button>}
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
export default Users;