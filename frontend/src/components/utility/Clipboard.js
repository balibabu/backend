import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../AuthContext';

function Clipboard() {
    const [clips, setClips] = useState([]);
    const { url, authTokens } = useContext(AuthContext);

    const getLatestClip = async () => {
        const response = await fetch(url + '/clips/list/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.access,
            }
        });
        if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
                setClips(data)
                navigator.clipboard.writeText(data[data.length - 1].content)
            }
        } else {
            alert('Failed to fetch files');
        }
    }

    const uploadClip = async (clipboardContent) => {
        const formData = new FormData();
        formData.append('content', clipboardContent);
        const response = await fetch(url + '/clips/upload-clip/', {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + authTokens.access
            },
            body: formData,
        });
        if (!response.ok) {
            alert('Failed to upload files');
        }
    }
    // const handleCopyToClipboard = async () => {
    //     const clipboardContent = await navigator.clipboard.readText();
    //     getLatestClip()
    //     uploadClip(clipboardContent)
    //     console.log(clips);
    // };

    useEffect(() => {
        getLatestClip();
    }, [])


    const old_clip_click = (oldClip) => {
        navigator.clipboard.writeText(oldClip);
    }
    const uploadClip_onClick = async () => {
        const clipboardContent = await navigator.clipboard.readText();
        uploadClip(clipboardContent)
    }
    return (
        <>
            <div className="btn-group p-3">
                <span className="">Clipboard : </span>
                <button type="button" className="btn btn-group btn-primary" onClick={uploadClip_onClick}>Upload</button>
                <button type="button" className="btn btn-group btn-info" onClick={getLatestClip}>Download</button>

                <div className="btn-group dropup" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul className="dropdown-menu">
                        {clips.map((clip) => {
                            return <li key={clip.id} onClick={() => old_clip_click(clip.content)}><a className="dropdown-item">{clip.content}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Clipboard
