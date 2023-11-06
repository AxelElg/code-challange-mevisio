import React, { FC } from 'react';
import ReactWordcloud, { Optional, Options } from 'react-wordcloud';

interface MyComponentProps {
	words: never[];
	isLoading: boolean;
	requestMade: boolean;
}

const DisplayArea: FC<MyComponentProps> = ({ words, isLoading, requestMade }) => {
	console.log(words.length > 0, isLoading);

	const options: Optional<Options> = {
		rotations: 4,
		rotationAngles: [0, 270],
		fontSizes: [16, 64],
	};

	let content = <div className='loader'></div>;

	if (!requestMade) {
		content = <div>upload .txt file and submit to generate word cloud</div>;
	}

	if (!isLoading && words.length > 0) {
		content = <ReactWordcloud words={words} options={options} />;
	}

	if (!isLoading && words.length === 0 && requestMade) {
		content = <div>no words where included in this file</div>;
	}

	return <div className='display-container'>{content}</div>;
};

export default DisplayArea;
