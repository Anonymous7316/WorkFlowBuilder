import Code from "../assets/code_svg";
import Calender from "../assets/calender_svg";
import API from "../assets/api_svg";
import Condition from "../assets/condition";
import Trigger from "../assets/trigger_svg";
import Mail from "../assets/mail_svg";

const NodeDrawer = ({ isOpen, setIsOpen }) => {

    const handleClose = () => {
        setIsOpen(false); 
    }

    const handleDragStart = (e, nodeType) => {
        e.dataTransfer.setData('application/reactflow', nodeType);
        e.dataTransfer.effectAllowed = 'move';
    }

    const handleDragEnd = (e) => {
        e.dataTransfer.clearData();
    }
    return (
        <>
            {isOpen && (
                <div style={{ position: 'absolute', top: 0, right: 0, width: 350, height: '100vh', backgroundColor: '#414244', zIndex: 5, color: 'white' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: 20 }}>
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
                        onClick={handleClose}
                        >
                        X
                        </button>
                    </div>
                    
                    <h1 style={{ margin: 30, textAlign:'center' }}>Node Drawer</h1>
                    <div 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 1fr 1fr', 
                            gap: '20px', 
                            margin:10
                        }}
                    >
                        <div 
                            draggable 
                            onDragStart={(event)=>handleDragStart(event, 'Trigger')}  
                            style={{  cursor: 'grab', display:'flex', justifyContent:'center', alignItems:'center' }}
                        >
                            <Trigger/>
                        </div>
                        <div draggable onDragStart={(event)=>handleDragStart(event, 'API')} onDragEnd={handleDragEnd} style={{ cursor: 'grab' }}>
                            <API/>
                        </div>
                        <div draggable onDragStart={(event)=>handleDragStart(event, 'Code')} onDragEnd={handleDragEnd} style={{ cursor: 'grab' }}>
                            <Code/>
                        </div>
                        <div draggable onDragStart={(event)=>handleDragStart(event, 'Condition')} onDragEnd={handleDragEnd} style={{ cursor: 'grab' }}>
                            <Condition/>
                        </div>
                        <div draggable onDragStart={(event)=>handleDragStart(event, 'Calender')} onDragEnd={handleDragEnd} style={{cursor: 'grab' }}>
                            <Calender />
                        </div>
                        <div draggable onDragStart={(event)=>handleDragStart(event, 'Mail')} onDragEnd={handleDragEnd} style={{cursor: 'grab' }}>
                            <Mail />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NodeDrawer;