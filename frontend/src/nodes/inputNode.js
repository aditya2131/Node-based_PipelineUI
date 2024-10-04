import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      fields={[
        { label: 'Name', type: 'text', value: currName, onChange: (e) => setCurrName(e.target.value) },
        { label: 'Type', type: 'select', value: inputType, onChange: (e) => setInputType(e.target.value) },
      ]}
      handles={[
        // Adding handle on the left for input, on the right for output (source)
        { type: 'target', position: Position.Left, id: `${id}-input` }, // Input handle on the left
        { type: 'source', position: Position.Right, id: `${id}-value` } // Output handle on the right
      ]}
    />
  );
};
