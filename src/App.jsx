import './App.css'
import Flow from './components/reactFlow'
import { ReactFlowProvider } from '@xyflow/react';

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  )
}

export default App
