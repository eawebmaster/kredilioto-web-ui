import axios from "axios";
const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL, // Replace with your API base URL
});

axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    // if unathorized, redirect to login
    console.log("server", typeof window === "undefined");
    if (error.response.status === 401) {
      // if (typeof window !== "undefined") {
      //   window.location.href = "/login";
      // }
    }

    return Promise.reject(error);
  }
);

axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    console.log(config.data, "data");
    // Modify the request config here
    return config;
  },

  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
