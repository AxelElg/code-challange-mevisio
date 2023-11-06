import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';

export function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [words, setWords] = useState([]);
	const [requestMade, setRequestMade] = useState(false);

	return (
		<div className='App'>
			<Container
				words={words}
				setWords={setWords}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
				requestMade={requestMade}
				setRequestMade={setRequestMade}
			/>
		</div>
	);
}
