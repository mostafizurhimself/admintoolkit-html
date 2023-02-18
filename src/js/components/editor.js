import Quill from "quill";
// Rich Text Editor Toolbar Options
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
// spimple markdown 



const editor  = {
    init(){
      const snowEditors = document.querySelectorAll('.quill-editor-snow');
      const bubbleEditors = document.querySelectorAll('.quill-editor-bubble');
      // snow text editor 
      snowEditors?.forEach(editor => {
        const quill = new Quill(editor, {
          modules: {
            toolbar:toolbarOptions
          },
          theme: 'snow'
        });
      })
      // bubble text editor 
      bubbleEditors?.forEach(editor => {
        const quill = new Quill(editor, {
          modules: {
            toolbar:[
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              ['blockquote', 'code-block'],
            
              [{ 'header': 1 }, { 'header': 2 }],               // custom button values
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
              [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
              [{ 'direction': 'rtl' }], 
            ]
          },
          theme: 'bubble'
        });
      })
    }
      
}

export default editor;