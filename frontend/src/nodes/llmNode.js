import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const [prompt, setPrompt] = useState(data?.prompt || '');

  return (
    <BaseNode
      title="LLM"
      fields={[
        { label: 'Prompt', type: 'text', value: prompt, onChange: (e) => setPrompt(e.target.value) }
      ]}
      handles={[
        // Adding target handle on the left (input) and source handle on the right (output)
        { type: 'target', position: Position.Left, id: `${id}-input` },   // Input handle on the left
        { type: 'source', position: Position.Right, id: `${id}-output` }  // Output handle on the right
      ]}
    />
  );
};
