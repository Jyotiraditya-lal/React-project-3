import React from "react";
import ReactDom from "react-dom"
import "./Modal.css"

const Backdrop=()=>{
    return (
        <div className="backdrop"></div>
    )
}


const Overlay=(props)=>{
    return(
        <div className="modal">
            <div>{props.children}</div>
        </div>
    )
}


const Modal=(props)=>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop />,document.getElementById('Overlays'))}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('Overlays'))}
        </React.Fragment>
    )
}

export default Modal
