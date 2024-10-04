import React, { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({ nodes: state.nodes, edges: state.edges }), shallow);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://node-based-pipelineui.onrender.com/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const result = await response.json();
            const { num_nodes, num_edges, is_dag } = result;

            toast.success(`Pipeline Analysis:
- Number of Nodes: ${num_nodes}
- Number of Edges: ${num_edges}
- Is DAG: ${is_dag ? 'Yes' : 'No'}`);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            toast.error('Failed to submit pipeline. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
            <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    opacity: loading ? 0.6 : 1
                }}
            >
                {loading ? 'Submitting...' : 'Submit Pipeline'}
            </button>
            <ToastContainer />
        </div>
    );
};