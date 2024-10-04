import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'Uppercase');

  return (
    <BaseNode
      title="Transform"
      fields={[
        { label: 'Transform Type', type: 'select', value: transformType, onChange: (e) => setTransformType(e.target.value) }
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` },
        { type: 'target', position: Position.Left, id: `${id}-input` }
      ]}
    />
  );
};
