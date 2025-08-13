import './styles/index.css';
import 'animate.css';
import './styles/toastify.css';
import './styles/skeleton.scss';
import 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import React from 'react';
import Loading from '../components/Loading';
import { AppProps } from 'next/app';
import ErrorBoundary from 'components/error/errorBoundary';
import { SnackbarProvider } from 'notistack';

export default function MyApp({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', 'dark');
		}

		if (!localStorage.getItem('debug')) {
			localStorage.setItem('debug', 'true');
		}

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		if (window.location.href.includes('demo=true')) {
			document.body.innerHTML = `<div class="sp"><div class="sp1"></div><div class="sp2"></div></div><div class="flex items-center justify-center dark:text-white text-gray-900 text-xl font-mono font-bold">Redirecting you to demo page, stay tight!</div>`;

			window.location.href = '/demo';
		}

		setTimeout(() => {
			setLoading(false);
		}, 1000);
		console.log(
			'%c🚀 Welcome to Discord Package 🚀\nPlease Report bugs to @peterhanania',
			'font-size: 1.5rem; font-weight: bold; color: #fff; background: #000; padding: 0.5rem;'
		);
		console.log(
			'%cMake sure to join the Discord server and leave your ideas, bug reports, and feedback to improve the service!',
			'font-size: 0.8rem; font-weight: bold; color: #fff; background: #000; padding: 0.3rem;'
		);
	}, []);

	return (
		<ErrorBoundary>
			{loading ? (
				<SnackbarProvider>
					<Loading skeleton={false} />
				</SnackbarProvider>
			) : (
				<Component {...pageProps} />
			)}
		</ErrorBoundary>
	);
}
