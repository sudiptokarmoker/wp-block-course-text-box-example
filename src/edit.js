import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;
	const onChangeText = (newText) => {
		setAttributes({
			text: newText,
		});
	};
	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment,
		});
	};
	return (
		<>
			{/* here on previous commit (if you want just then see the last commit of this code) we just putted here some lot of codeon placing toolbar by @wordpress/components package. But now we have just here working by another way!*/}
			{/* https://github.com/sudiptokarmoker/wp-block-course-text-box-example/commit/8fb9045275177c2d50448339be170eb21c2931a0 */}
			<InspectorControls>
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Inpu Label"
						value={text}
						onChange={onChangeText}
						help="help text"
					/>
					<TextareaControl
						label="Text Area Label"
						value={text}
						onChange={onChangeText}
						help="help text"
					/>
					<ToggleControl
						label="Toggle Label"
						checked={true}
						//onChange={(v) => console.log(v)}
					/>
					<AnglePickerControl />
					<ColorPicker
						color={' F03 '}
						//onChangeComplete={(v) => console.log(v)}
					/>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						]}
						//onChange={ (v) => console.log(v) }
					/>
				</PanelBody>
			</InspectorControls>
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
