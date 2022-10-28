import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline'],[
      { list: 'ordered' },
      { list: 'bullet' },
    ],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'list',
  'bullet'
]

export default function JobDescEditor() {
  return <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" placeholder='description'/>
}