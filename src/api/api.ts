import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "70d80796-3f72-4c1c-8a51-937b510017ff"
  }
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
}

// export const getUsers2 = (currentPage: number, pageSize: number) => {
//   return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//       return response.data;
//     });
// }

export const userProfileAPI = {
  setUserProfile(userId: string) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data;
      });
  }
}

// export const authAPI = {
//   setAuthUserData() {
//     return instance.get(`auth/me`)
//       .then(response => {
//         return response.data;
//       });
//   }
// }
