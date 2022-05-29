import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, alignment } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	return (
		<>
			{/* here on previous commit (if you want just then see the last commit of this code) we just putted here some lot of codeon placing toolbar by @wordpress/components package. But now we have just here working by another way!*/}
			{/* https://github.com/sudiptokarmoker/wp-block-course-text-box-example/commit/8fb9045275177c2d50448339be170eb21c2931a0 */}
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your Text Here', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
				style={{
					textAlign: alignment,
				}}
			/>
		</>
	);
}
