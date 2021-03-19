import axios from 'axios';


let messageSend = (payload) => {

    const config = {
      method: "POST",
      url: "https://vkpfkvnxna.execute-api.us-west-1.amazonaws.com/alpha",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
};
  
export default messageSend;