import React, { useCallback, useState } from 'react'
import './app.css'
import Editor from './editor'

const App: React.FC = () => {
  const [doc, setDoc] = useState('# Hello, world')
  const handleChangeDoc = useCallback(newDoc => setDoc(newDoc), [])
  return (
    <div className="app">
      <Editor onChange={handleChangeDoc} initialDoc={doc} />
    </div>
  )
}

export default App
