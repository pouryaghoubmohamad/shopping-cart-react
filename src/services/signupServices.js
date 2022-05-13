// http
import http from "./httpServices";

const signupServices = (data) => {
    return http.post("/user/register", data);
};

export default signupServices;
