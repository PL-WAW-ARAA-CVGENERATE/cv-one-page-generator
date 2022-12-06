import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = (props: { onWriting: any }) => {
	const { onWriting } = props;
	const [value, setValue] = useState("");
	console.log(value);
	useEffect(() => {
		onWriting(value);
	}, [value]);

	return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default Editor;
