import GreenButton from "./components/GreenButton.tsx";
import Welcome from "./components/Welcome.tsx";

function App() {
	return (
		<>
			<div className={`flex text-justify`}>
				<div>
					<Welcome />
					<GreenButton>Green Button</GreenButton>
				</div>
			</div>
		</>
	);
}

export default App;
