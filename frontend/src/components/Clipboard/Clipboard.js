import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../AuthContext';
import getLatestClip from './getLatestClip';
import uploadClip from './uploadClip';

function Clipboard() {
    const [clips, setClips] = useState([]);
    const { url, authTokens } = useContext(AuthContext);

    // const handleCopyToClipboard = async () => {
    //     const clipboardContent = await navigator.clipboard.readText();
    //     getLatestClip()
    //     uploadClip(clipboardContent)
    //     console.log(clips);
    // };

    const old_clip_click = (oldClip) => {
        navigator.clipboard.writeText(oldClip);
    }
    const uploadClip_onClick = async () => {
        const clipboardContent = await navigator.clipboard.readText();
        uploadClip(clipboardContent, url, authTokens)
    }
    return (
        <>
            <div style={floatButtonContainerStyle}>
                <p style={{ color: 'rgba(0,0,0,.5)' }}>Clipboard</p>
                <div className="btn-group" style={buttonStyle}>
                    <button onClick={uploadClip_onClick} style={{ borderTopRightRadius: '3rem', borderBottomLeftRadius: '3rem' }} type="button" className="btn btn-outline-primary">U</button>
                    <button style={{ width: '2rem', borderTopLeftRadius: '100%', borderTopRightRadius: '100%' }} type="button" className="btn btn-outline-info " data-bs-toggle="dropdown">H</button>
                    <ul className="dropdown-menu">
                        {clips.map((clip) => {
                            return <li key={clip.id} onClick={() => old_clip_click(clip.content)}>
                                <a className="dropdown-item">{clip.content.substring(0, 20)}{clip.content.length > 20 ? '......' : ''}</a>
                            </li>
                        })}
                    </ul>
                    <button
                        onClick={() => getLatestClip(url, authTokens, setClips)}
                        style={{ borderTopLeftRadius: '3rem', borderBottomRightRadius: '3rem' }}
                        type="button" className="btn btn-outline-primary"
                    >D</button>
                </div>
            </div>
        </>
    )
}

export default Clipboard

const buttonStyle = {
    width: '5rem',
    height: '5rem',
}
const floatButtonContainerStyle = {
    position: 'fixed',
    bottom: '1rem', // Adjust this value to set the desired distance from the bottom
    left: '1rem',
    zIndex: 1000, // Set a z-index value to control the stacking order
    borderRadius: '100px'
};