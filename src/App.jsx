import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal.jsx";
import SignUpForm from "./components/Modal/SignUpForm.jsx";
import LoginForm from "./components/Modal/LoginForm.jsx";


function App() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [isSignUp, setIsSignUp] = useState(true);

	const handleOpenModal = (isSignUpForm) => {
		setIsSignUp(isSignUpForm);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

  
	return (
		<>
			<div
				className="flex h-screen justify-center items-center bg-mountain-gate bg-cover"
				style={{
					backgroundImage: "url('public/assets/images/gate-wide.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="text-center flex flex-col gap-8">
					<h1 className="text-8xl ">Gate Keeper</h1>
					<h2 className="text-2xl">Choose Your Journey</h2>
					<div className="flex gap-4">
						<button
							onClick={() => handleOpenModal(true)}
							className="border-2 border-black rounded-md px-2"
						>
							New adventurer
						</button>
						<button
							onClick={() => handleOpenModal(false)}
							className="border-2 border-black rounded-md px-2"
						>
							Continue an existing journey
						</button>
					</div>
					<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
						{isSignUp ? (
							<SignUpForm onSubmit={handleCloseModal} />
						) : (
							<LoginForm onSubmit={handleCloseModal} />
						)}
					</Modal>
				</div>
			</div>
		</>
	);
}

export default App;
