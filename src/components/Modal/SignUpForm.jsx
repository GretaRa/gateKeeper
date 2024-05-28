const SignUpForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input type="text" className="w-full px-3 py-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full px-3 py-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input type="password" className="w-full px-3 py-2 border rounded" required />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded">Sign Up</button>
    </form>
  );
};

export default SignUpForm;