// http
import http from "./httpServices";

const loginServices = (data) => {
    return http.post("/user/login", data);
};

export default loginServices;
