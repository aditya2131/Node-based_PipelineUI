import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const CalculationNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Add');

  return (
    <BaseNode
      title="Calculation"
      fields={[
        { label: 'Operation', type: 'select', value: operation, onChange: (e) => setOperation(e.target.value) },
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-result` },
        { type: 'target', position: Position.Left, id: `${id}-input` }
      ]}
    />
  );
};
