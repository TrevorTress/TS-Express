/// <reference types="vite/client" />

type X = {
	className?: string;
	children?: ReactNode;
};

declare namespace JSX {
	interface IntrinsicElements {
		// i like using custom html elements and if typescript doesnt like it they can pry them from my cold dead carpal-tunneled hands -TT
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[element: string]: any;
	}
}
