import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Import CodeMirror CSS
import 'codemirror/mode/javascript/javascript'; // Import JavaScript mode

const CodeSpace = () => {
    
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User code:", code); // Do something with the user code
    // You can send 'code' to a server, evaluate it, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'default',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CodeSpace;
