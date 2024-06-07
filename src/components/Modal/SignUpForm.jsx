import { useState } from "react";
import { PostRequest } from "./PostRequest";
import { Alert } from "../Alert";

const SignUpForm = () => {

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
  const [fetchResponse, setFetchResponse] = useState();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let data = new FormData();
			data.append("password", formData.password);
			data.append("email", formData.email);
			data.append("username", formData.username);

			const headers = {
				"Content-Type": "multipart/form-data",
			};
			const response = await PostRequest(
				"http://localhost:8001/api/register",
				data,
				headers
			);
			console.log("Response:", response);
      setFetchResponse(response)
      
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="text-xl font-semibold mb-4">Sign Up</h2>
			<div className="mb-4">
				<label className="block text-gray-700">Username</label>
				<input
					onChange={handleChange}
					type="text"
					className="w-full px-3 py-2 border rounded"
					name="username"
					value={formData.username}
					required
				/>
        {fetchResponse && fetchResponse.username ? <Alert alertMessage={fetchResponse.username} /> : null}
			</div>
			<div className="mb-4">
				<label className="block text-gray-700">Email</label>
				<input
					onChange={handleChange}
					type="email"
					className="w-full px-3 py-2 border rounded"
					name="email"
					value={formData.email}
					required
				/>
        {fetchResponse && fetchResponse.email ? <Alert alertMessage={fetchResponse.email} /> : null}
			</div>
			<div className="mb-4">
				<label className="block text-gray-700">Password</label>
				<input
					onChange={handleChange}
					type="password"
					className="w-full px-3 py-2 border rounded"
					name="password"
					value={formData.password}
          minLength={8}
          maxLength={64}
					required
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-blue-500 text-white px-3 py-2 rounded"
			>
				Sign Up
			</button>
		</form>
	);
};

export default SignUpForm;
