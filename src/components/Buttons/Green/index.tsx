import type { ReactNode } from "react";
import classes from "./index.module.css";

export default function ButtonGreen(props: {
	onClick: () => void;
	children: ReactNode;
}) {
	return (
		<button onClick={props.onClick} className={classes.green_button}>
			{props.children}
		</button>
	);
}
