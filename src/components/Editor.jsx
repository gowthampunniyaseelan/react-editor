import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';

import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/abbott.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

import { Controlled as ControlledEditorComponent } from 'react-codemirror2';



const Editor = ({ language, value, setEditorState }) => {

  const [theme, setTheme] = useState("dracula")
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  }

  const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night','3024-day','3024-night','abbott']

  return (
    <div className="editor-container">
      <div style={{marginBottom: "10px"}}>
        <label for="cars">Choose a theme: </label>
        <select name="theme" onChange={(el) => {
          setTheme(el.target.value)
        }}>
          {
            themeArray.map( theme => (
              <option value={theme}>{theme}</option>
            ))
          }
        </select>
      </div>
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value= {value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true, 
        }}
      />
    </div>
  )
}

export default Editor
