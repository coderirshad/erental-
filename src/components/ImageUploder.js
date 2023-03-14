import React from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const ImageUploder = (props) => {
    return (
        <div className='imageUploder'>
           <div className="camera">
               <div className='icon'><CameraAltIcon style={{fontSize:'70px'}}></CameraAltIcon></div>
               <label>Upload Image</label>
           </div>
           <div className="buttons">
               <div className="label">Upload {props.heading}</div>
               <div className="choose">
                  <input type='file' name={props.fieldName} onChange={props.handleFile}></input>
               </div>
               <button>Submit</button>
           </div>
        </div>
    )
}

export default ImageUploder;