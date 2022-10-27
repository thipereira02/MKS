import React, { useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ActiveCartContext from "./contexts/ActiveCartContext";
import GlobalStyle from "./layouts/GlobalStyle";
import Home from "./pages/Home";
import store from "./store/store";

function App() {
	const [isActive, setIsActive] = useState(false);

	return (
		<ActiveCartContext.Provider value={{ isActive, setIsActive }}>
			<Provider store={store}>
				<GlobalStyle />
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
				<Home />
			</Provider>
		</ActiveCartContext.Provider>
	);
}

export default App;