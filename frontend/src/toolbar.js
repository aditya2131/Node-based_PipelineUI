import React from 'react';
import { DraggableNode } from './draggableNode';
import styled from 'styled-components';

export const PipelineToolbar = () => {
  return (
    <ToolbarContainer>
      <NodeWrapper>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='calculation' label='Calculation' />
        <DraggableNode type='transform' label='Transform' />
        <DraggableNode type='filter' label='Filter' />
        <DraggableNode type='merge' label='Merge' />
        <DraggableNode type='customNode' label='Custom Node' />
      </NodeWrapper>
    </ToolbarContainer>
  );
};

// Styled-components for the toolbar

const ToolbarContainer = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 2px solid #ccc;
  font-family: 'Poppins', sans-serif;
`;

const NodeWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// Style each DraggableNode button
// eslint-disable-next-line no-unused-vars
const NodeButton = styled.div`
  background-color: #6a0dad;
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #8b3dc9;
    transform: scale(1.05);
  }
`;

export default PipelineToolbar;
