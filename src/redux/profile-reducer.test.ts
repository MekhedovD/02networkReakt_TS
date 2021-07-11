import profileReducer, {addPostAC, deletePost, UserProfileType} from "./profile-reducer";

export type PostType = {
  message: string
  likeCount: number
  id: string
}

type InitialStateType = {
  posts: Array<PostType>
  profile: null | UserProfileType
  status: string
}

let state: InitialStateType = {
  posts: [
    {message: "Hello! How are you", likeCount: 5, id: "1"},
    {message: "It's my first post", likeCount: 2, id: "2"},
  ],
  profile: null,
  status: ""
};

test('length of post should be incremented', () => {
  let action = addPostAC("it-kamasutra.com");

  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  let action = addPostAC("it-kamasutra.com");

  let newState = profileReducer(state,action);

  expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
  let action = deletePost("2");

  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(1);
});

test('after deleting length should not be decrement if id is incorect', () => {
  let action = deletePost("1000");

  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(2);
});

