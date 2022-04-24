import React, { useState, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { EditorContext } from '../../context/editor.context';

function TextEditor(props) {
  const { contenido } = props;
  const { editorText, setEditorText } = useContext(EditorContext);

  const [text, setText] = useState('');

  return (
    <div>
      <h4>Contenido</h4>
      <CKEditor
        editor={ClassicEditor}
        data={contenido}
        config={{
          mediaEmbed: {
            previewsInData: true,
          },
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          const content = editor.getData();
          setEditorText(content);
          // console.log(editorText);
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      />
    </div>
  );
}

export default TextEditor;
