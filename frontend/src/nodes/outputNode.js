import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      fields={[
        { label: 'Name', type: 'text', value: currName, onChange: (e) => setCurrName(e.target.value) },
        { label: 'Type', type: 'select', value: outputType, onChange: (e) => setOutputType(e.target.value) },
      ]}
      handles={[
        // Adding a target handle on the left for receiving data
        { type: 'target', position: Position.Left, id: `${id}-value` }  // Input handle on the left
      ]}
    />
  );
};
