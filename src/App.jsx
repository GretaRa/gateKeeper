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
					backgroundImage: "url('/assets/images/gate-wide.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="text-center flex flex-col items-center gap-8">
					<img src="/assets/images/title.png" alt="Gate Keeper Logo" />
					<img className="max-w-[40rem]" src="/assets/images/subtitle.png" alt="Choose your journey" />
					<div className="flex gap-4">
						<button
							onClick={() => handleOpenModal(true)}
							className=" font-bold text-2xl rounded-md px-4 py-2 bg-blue-400 text-white"
						>
							New adventurer
						</button>
						<button
							onClick={() => handleOpenModal(false)}
							className=" font-bold text-2xl rounded-md px-4 py-2 bg-indigo-400 text-white"
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
