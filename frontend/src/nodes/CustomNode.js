import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const CustomNode = ({ id, data }) => {
  const [customOperation, setCustomOperation] = useState(data?.customOperation || 'Operation 1');

  return (
    <BaseNode
      title="Custom Node"
      fields={[
        { label: 'Operation', type: 'text', value: customOperation, onChange: (e) => setCustomOperation(e.target.value) }
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` },
        { type: 'target', position: Position.Left, id: `${id}-input` }
      ]}
    />
  );
};
