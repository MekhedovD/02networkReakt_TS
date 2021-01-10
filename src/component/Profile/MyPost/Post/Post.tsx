import React from "react";
import s from "./Post.module.css";

export type PostType = {
  message: string
  likeCount: number
}

const Post = (props: PostType) => {
  return (
      <div className={s.posts}>
        <div className={s.item}>
          <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt=""/>
          {props.message}
          <div><span>{props.likeCount}</span></div>
        </div>
      </div>
  )
}

export default Post;