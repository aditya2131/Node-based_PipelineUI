import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const MergeNode = ({ id, data }) => {
  const [mergeStrategy, setMergeStrategy] = useState(data?.mergeStrategy || 'Concatenate');

  return (
    <BaseNode
      title="Merge"
      fields={[
        { label: 'Strategy', type: 'select', value: mergeStrategy, onChange: (e) => setMergeStrategy(e.target.value) }
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` },
        { type: 'target', position: Position.Left, id: `${id}-input1` },
        { type: 'target', position: Position.Left, id: `${id}-input2` }
      ]}
    />
  );
};
