import axios from "axios";

export const postAnItem = (requestBody) => {
  return axios
    .post("https://tmrdb.herokuapp.com/api/users", requestBody)
    .then(({ data }) => {
      console.log(data);
      // return data.users;
    });
};
{
  /* <ItemAdder
  addItem={this.addItem}
  article_id={article_id}
  username={username}
/> */
}
