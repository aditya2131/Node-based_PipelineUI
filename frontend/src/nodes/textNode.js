import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [textValue, setTextValue] = useState(data?.textValue || '');
  const [variables, setVariables] = useState([]);  // Store detected variables

  // Helper function to extract variables from the text input
  const findVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    let match;
    const detectedVariables = [];
    while ((match = regex.exec(text)) !== null) {
      detectedVariables.push(match[1]);
    }
    return detectedVariables;
  };

  useEffect(() => {
    const detectedVariables = findVariables(textValue);
    setVariables(detectedVariables);
  }, [textValue]);

  // Adjusting the node size based on content
  const adjustNodeSize = (value) => {
    const lines = value.split('\n').length;
    const newHeight = Math.max(80, lines * 20);
    return {
      height: `${newHeight}px`,
    };
  };

  return (
    <BaseNode
      title="Text"
      style={adjustNodeSize(textValue)} // Adjust the node height
      fields={[
        {
          label: 'Text',
          type: 'textarea',  // Changed to textarea for multi-line input
          value: textValue,
          onChange: (e) => setTextValue(e.target.value),
          style: { resize: 'none' },  // Prevent manual resizing
        },
      ]}
      handles={[
        // Add source handle for output
        { type: 'source', position: Position.Right, id: `${id}-output` },
        // Dynamically generate handles for variables
        ...variables.map((variable, index) => ({
          type: 'target',
          position: Position.Left,
          id: `${id}-input-${variable}-${index}`,
        })),
      ]}
    />
  );
};

export default TextNode;
