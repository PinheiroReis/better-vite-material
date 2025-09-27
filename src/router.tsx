import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import PageHome from "./pages/Home/index.tsx";
import PageAbout from "./pages/About/index.tsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <PageHome /> },
			{ path: "about", element: <PageAbout /> },
		],
	},
]);
