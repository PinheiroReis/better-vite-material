import viteIcon from "../../../assets/vite.svg";
import reactIcon from "../../../assets/react.svg";

import classes from "./index.module.css";

export default function IconsTools() {
	return (
		<div className={classes.container}>
			<img src={viteIcon} alt="vite_icon" />
			<img src={reactIcon} alt="react_icon" />
		</div>
	);
}
