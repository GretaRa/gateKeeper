import axios from "axios";


export const PostRequest = async (data) => {
  const response = await axios.post('http://localhost:8001/api/register', {
    username: data.username,
    password: data.password,
    email: data.email
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log('postrequest', error);
  });
  return response.data;
};

// export const PostRequest = async (data) => {
//   const response = await axios.post(
//     'http://localhost:8001/api/register', {
//             username: data.username,
//             email: data.email,
//             password: data.password
//     }, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }}
//   );
//   return response.data;
// };

