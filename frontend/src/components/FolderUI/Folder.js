// import React, { useState } from 'react';
// import folderIcon from '../../images/folder.png';
// import dots from '../../images/3dots.png';
// import updateFolderTitle from './updateFolderTitle';
// import deleteFolder from './deleteFolder';

// function Folder(props) {
//     const [renaming, setRenaming] = useState(false);
//     const [title, setTitle] = useState(props.folder.title)
//     const buttonClick = () => {
//         props.on_folder_click(props.folder)
//     }
//     const on_update_click=()=>{
//         console.log(props.folder);
//         updateFolderTitle(props.folder.id,title,props.url,props.authTokens.access,props.setFolders)
//         setRenaming(false)
//     }
//     const on_folder_delete = () => {
//         const confirmed = window.confirm("Remember Deleting folder doesnt delete your files inside it.\nAre you sure you want to delete this folder?");
//         if (confirmed) {
//             deleteFolder(props.url, props.authTokens.access, props.folder.id, props.setFolders);
//         }
//     }
    
//     return (
//         <>
//             {renaming ?
//                 <>
//                     <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
//                     <button onClick={on_update_click}>update</button>
//                 </>
//                 :
//                 <div className='m-2' style={{ backgroundColor: 'grey', display: 'inline-flex', alignItems: 'center', borderRadius: '0.5rem' }}>
//                     <img src={folderIcon} className='mx-1 px-1' style={{ width: '2.5rem' }} alt="Folder Icon" />
//                     <h6 className='mt-2' onClick={buttonClick} style={{ cursor: 'pointer' }}>{props.folder.title}</h6>
//                     <button type='button' data-bs-toggle="dropdown" style={{ background: 'none', border: 'none' }}>
//                         <img src={dots} style={{ width: '1rem' }} />
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li><button className="dropdown-item" onClick={()=>setRenaming(true)}>Rename</button></li>
//                         <li><button className="dropdown-item" onClick={on_folder_delete}>Delete</button></li>
//                     </ul>
//                 </div>
//             }
//         </>
//     );
// }

// export default Folder;
