import React, { FC } from 'react';

import DisplayArea from './DisplayArea';
import InteractionArea from './InteractionArea';

interface MyComponentProps {
	words: never[];
	setWords: React.Dispatch<React.SetStateAction<never[]>>;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	requestMade: boolean;
	setRequestMade: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container: FC<MyComponentProps> = ({
	words,
	setWords,
	isLoading,
	setIsLoading,
	requestMade,
	setRequestMade,
}) => {
	return (
		<div className='container'>
			<DisplayArea words={words} isLoading={isLoading} requestMade={requestMade} />
			<InteractionArea
				setWords={setWords}
				setIsLoading={setIsLoading}
				setRequestMade={setRequestMade}
			/>
		</div>
	);
};

export default Container;
