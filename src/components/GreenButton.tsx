import type { ReactNode } from "react";

export default function GreenButton(props: {
	className?: string;
	children: ReactNode;
}) {
	return (
		<button
			className={`border-2 rounded-md p-1 flex flex-row bg-green-600 border-green-500 hover:bg-green-500 active:bg-green-400 ${props.className}`}
		>
			{props.children}
		</button>
	);
}
