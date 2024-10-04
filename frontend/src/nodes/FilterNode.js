import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const FilterNode = ({ id, data }) => {
  const [filterCriteria, setFilterCriteria] = useState(data?.filterCriteria || 'Greater Than');

  return (
    <BaseNode
      title="Filter"
      fields={[
        { label: 'Criteria', type: 'select', value: filterCriteria, onChange: (e) => setFilterCriteria(e.target.value) }
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` },
        { type: 'target', position: Position.Left, id: `${id}-input` }
      ]}
    />
  );
};
