import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"http://ec2-54-238-226-33.ap-northeast-1.compute.amazonaws.com:4000",
    // baseURL:"http://localhost:4000",
});

export default axiosInstance;