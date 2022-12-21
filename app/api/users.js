import client from "./client";
/* To register new users */

const register = (userInfo) => client.post("/users", userInfo);

export default {
    register,
}