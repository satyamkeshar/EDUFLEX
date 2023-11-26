import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const ContentEditor = ({ content, setContent, height }) => {
	const editorRef = useRef(null);
	function handleChange(evt, editor) {
		if (editorRef.current) {
			const content = editorRef.current.getContent();
			setContent(content);
		}
	}
	useEffect(() => {
		// tinyMCE.getElementById('1_ifr').getWin().document.body.style.backgroundColor = '#00ff00';
	}, []);
	return (
		<>
			<Editor
				id="1"
				apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
				onInit={(evt, editor) => (editorRef.current = editor)}
				initialValue={content ? content : ''}
				onChange={handleChange}
				init={{
					height: height ? height : 200,
					menubar: false,
					plugins: [
						'advlist',
						'autolink',
						'lists',
						'link',
						'image',
						'charmap',
						'preview',
						'anchor',
						'searchreplace',
						'visualblocks',
						'code',
						'fullscreen',
						'insertdatetime',
						'media',
						'table',
						'code',
						'help',
						'wordcount',
					],
					toolbar:
						'undo redo | blocks | ' +
						'bold italic forecolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | help',

					// selector: 'textarea',
					// skin: 'oxide-dark',
					// content_css: 'default',
					// body_class: 'custom-tiny',
					selector: 'textarea',
					content_style: 'body { font-family:Nunito Sans,sans-serif; font-size:16px }'
				}}
			/>
		</>
	);
};
export default ContentEditor;
