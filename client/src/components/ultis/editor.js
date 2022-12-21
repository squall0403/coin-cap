import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Container from 'react-bootstrap/esm/Container';

const editorConfiguration = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'fontFamily',
            'fontSize',
            'fontColor',
            '|',
            'outdent',
            'indent',
            '|',
            // 'imageUpload',
            'imageInsert',
            'mediaEmbed',
            '|',
            'insertTable',
            'undo',
            'redo',
            'blockQuote',
            '|',
            'code',
            'horizontalLine'
        ]
    },
    language: 'en',
    image: {
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
};

const CkCustomedEditor = () => {
    return (
        <Container>
            <CKEditor
                editor={Editor}
                config={editorConfiguration}
                data=""
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.

                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    // console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                }}
            />
        </Container>
    )
}

export default CkCustomedEditor