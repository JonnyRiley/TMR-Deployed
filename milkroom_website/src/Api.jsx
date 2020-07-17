import axios from "axios";

export const postAnItem = (requestBody) => {
  console.log(requestBody);
  return axios
    .post("https://tmrdb.herokuapp.com/api/users", requestBody)
    .then(({ data }) => {
      return data.user;
    });
};
