import { useCallback } from 'react';
import { Handle } from '@xyflow/react';
import API from '../../assets/api_svg';
 
function ApiNode(props) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <div style={{ display:'flex', border:'1px solid #c3c9d5', width:70, height:70, borderRadius:4, padding:5, justifyContent:'center', alignItems:'center', color:'#c3c9d5',backgroundColor: '#414244'}}>
        <Handle type="target" position="left" style={{ background: '#c3c9d5', width: 5,  borderRadius:0, height:10}} />
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', color:'#c3c9d5'}}>
      <API/>
      </div>
      <Handle type="source" position="right" id="a" style={{ background: '#c3c9d5', width: 10, height:10 }} />
    </div>
  );
}
 
export default ApiNode;