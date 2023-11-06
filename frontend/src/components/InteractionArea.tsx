import React, { FC } from 'react';

interface MyComponentProps {
	setWords: React.Dispatch<React.SetStateAction<never[]>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setRequestMade: React.Dispatch<React.SetStateAction<boolean>>;
}

const InteractionArea: FC<MyComponentProps> = ({ setWords, setIsLoading, setRequestMade }) => {
	const submit = (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		const formData = new FormData();
		const file = e.target['0'].files[0];

		formData.append('files', file);

		fetch('/api/words', {
			method: 'POST',
			body: formData,
		})
			.then(r => r.json())
			.then(words => {
				{
					setWords(words);
					setIsLoading(false);
					setRequestMade(true);
				}
			})
			.catch(err => {
				setIsLoading(false);
				setWords([]);
				setRequestMade(true);
			});
	};

	return (
		<form action='submit' onSubmit={submit} className='form'>
			<input type='file' name='upload' id='' accept='.txt' />
			<input type='submit' value='submit' />
		</form>
	);
};

export default InteractionArea;
