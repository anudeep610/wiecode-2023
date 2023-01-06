import axios from "axios";

const axiosInstance=axios.create({
    //baseURL:"http://ec2-13-235-124-84.ap-south-1.compute.amazonaws.com:3000",
    baseURL:"http://localhost:4000",
});

export default axiosInstance;