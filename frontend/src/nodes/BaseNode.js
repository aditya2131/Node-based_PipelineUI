import { Handle, Position } from 'reactflow';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

export const BaseNode = ({ title, fields, handles, style }) => {
  return (
    <NodeContainer style={style}>
      <NodeHeader>{title}</NodeHeader>
      <NodeFields>
        {fields.map(({ label, type, value, onChange, style }, index) => (
          <FieldContainer key={index}>
            <label>{label}:</label>
            {type === 'textarea' ? (
              <AutoResizeTextarea
                value={value}
                onChange={onChange}
                style={style}
              />
            ) : type === 'select' ? (
              <StyledSelect value={value} onChange={onChange}>
                <option value="Text">Text</option>
                <option value="File">File</option>
              </StyledSelect>
            ) : (
              <StyledInput
                type={type}
                value={value}
                onChange={onChange}
                style={style}
              />
            )}
          </FieldContainer>
        ))}
      </NodeFields>
      {handles.map(({ type, position, id }, index) => (
        <Handle
          key={index}
          type={type}
          position={position}
          id={id}
          className={`handle-${type}`}
        />
      ))}
    </NodeContainer>
  );
};

// Auto-resizing TextArea with overflow fix
const AutoResizeTextarea = ({ value, onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    // Adjust the height of the textarea based on the scrollHeight
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [value]);

  return (
    <StyledTextarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      rows={1}
    />
  );
};

// Styled components for the BaseNode
const NodeContainer = styled.div`
  width: 250px;  /* Set a fixed or dynamic width */
  padding: 12px;
  border-radius: 10px;
  background-color: #D2E0FB;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 2px solid #6a0dad;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: true; /* Hide overflow */
`;

const NodeHeader = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const NodeFields = styled.div`
  margin-top: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  font-size: 12px;
  box-sizing: border-box;
  overflow-y: hidden; /* Prevent scrollbars from appearing */
  resize: none; /* Disable resizing by user */
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  font-size: 12px;
  box-sizing: border-box;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  font-size: 12px;
  box-sizing: border-box;
`;

// Define prop types
BaseNode.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      onChange: PropTypes.func.isRequired,
      style: PropTypes.object,
    })
  ).isRequired,
  handles: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      position: PropTypes.oneOf([Position.Left, Position.Right]).isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  style: PropTypes.object,
};

export default BaseNode;
