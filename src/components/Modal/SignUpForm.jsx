import { useState } from "react";
import { PostRequest } from "./PostRequest";
import axios from "axios";

const SignUpForm = () => {

  const [ data, setData ] = useState({
    username: "",
    email: "",
    password: "",
    });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

    const fetchDataForPosts = async () => {

    let formdata = new FormData();
    formdata.append('password', data.password);
    formdata.append('email', data.email);
    formdata.append('username', data.username);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8001/api/register',
      headers: { 
        'Content-Type': 'multipart/form-data'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error.request.response);
    });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submit')
      fetchDataForPosts();
    };  

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input onChange={handleInput} type="text" className="w-full px-3 py-2 border rounded" name="username" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input onChange={handleInput} type="email" className="w-full px-3 py-2 border rounded" name="email" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input onChange={handleInput} type="password" className="w-full px-3 py-2 border rounded" name="password" required />
      </div>
      <button onChange={handleInput} type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded">Sign Up</button>
    </form>
  );
};

export default SignUpForm;