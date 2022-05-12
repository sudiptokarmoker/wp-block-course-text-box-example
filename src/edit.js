import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>
			<BlockControls group="block">
				<p>Block Controls</p>
			</BlockControls>
			<BlockControls
				group="other"
				controls={[
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						//onClick: () => console.log('button 1 clicked'),
					},
					{
						title: 'Button 2',
						icon: 'admin-collapse',
						isActive: true,
						//onClick: () => console.log('button 2 clicked'),
					},
				]}
			>
				{text && (
					<ToolbarGroup>
						<ToolbarButton
							title="Align Left"
							icon="editor-alignleft"
							//onClick={() => console.log('Align Left')}
						/>
						<ToolbarButton
							title="Align Center"
							icon="editor-aligncenter"
							//onClick={() => console.log('Align Center')}
						/>
						<ToolbarButton
							title="Align Right"
							icon="editor-alignright"
							//onClick={() => console.log('Align Right')}
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={__('More Alignment', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full-width',
								},
							]}
						/>
					</ToolbarGroup>
				)}
			</BlockControls>
			<RichText
				{...useBlockProps()}
				onChange={(value) => setAttributes({ text: value })}
				value={text}
				placeholder={__('Your Text Here', 'text-box')}
				tagName="h4"
				allowedFormats={['core/bold']}
			/>
		</>
	);
}
