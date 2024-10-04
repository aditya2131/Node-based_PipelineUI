import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import GlobalStyle from './styles/GlobalStyle'; // Import GlobalStyle

function App() {
  return (
    <div>
      <GlobalStyle />  {/* Add the GlobalStyle component */}
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
