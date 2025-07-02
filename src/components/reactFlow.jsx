import { useCallback, useState, useRef } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
} from '@xyflow/react';
import { v4 as uuidv4 } from 'uuid';
import '@xyflow/react/dist/style.css';
import NodeDrawer from './nodeDrawer';
import CodeNode from './nodes/codeNode';
import CalenderNode from './nodes/calenderNode';
import ApiNode from './nodes/apiNode';
import ConditionNode from './nodes/conditionNode';
import TriggerNode from './nodes/triggerNode';
import MailNode from './nodes/mailNode';
import LoopNode from './nodes/loopNode';
import AddNode from './nodes/addNode';
import AgentNode from './nodes/agentNode';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isNodeDrawerOpen, setIsNodeDrawerOpen] = useState(false);
  const reactFlowInstance = useReactFlow();
  const nodeTypes = { Code: CodeNode, Calender:CalenderNode, API: ApiNode, Condition:ConditionNode, Trigger: TriggerNode, Mail: MailNode, Loop: LoopNode, Add: AddNode, Agent: AgentNode };

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);


  // Handle drag over to allow drop
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // Handle drop event to add a new node
  const onDrop = useCallback((event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('application/reactflow');
    console.log(type)
    if (!type) return;
    console.log('Instance on drop:', reactFlowInstance);
    console.log('Type of project:', typeof reactFlowInstance);
    console.log('All keys:', Object.keys(reactFlowInstance));
    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    console.log('Drop position:', position);
    const newNode = {
        id: uuidv4(), // Simple unique ID
        type,
        position,
        data: { label: `${type} node` },
    };
    setNodes((nds) => nds.concat(newNode));
    console.log(nodes)
  }, [setNodes, reactFlowInstance]);
  

  return (
    <>
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 4 }}>
        <button
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'transparent',
            border: '1px solid white',
            cursor: 'pointer',
            color: 'white',
            borderRadius: 4,
            fontSize: '20px',
            fontWeight: 'bold'
          }}
          onClick={() => setIsNodeDrawerOpen(true)}
        >+</button>
      </div>
      <div
        style={{ width: '100vw', height: '100vh' }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <NodeDrawer isOpen={isNodeDrawerOpen} setIsOpen={setIsNodeDrawerOpen} />
    </>
  );
}

export default Flow;