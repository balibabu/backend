// async function deleteFolder(url, access_token, folderId, setFolders) {
//     try {
//         const response = await fetch(`${url}/file/delete-folder/${folderId}/`, {
//             method: 'DELETE',
//             headers: {
//                 'Authorization': `Bearer ${access_token}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (response.status === 204) {
//             setFolders((previousFolder) =>
//                 previousFolder.filter((folder) => folder.id !== folderId)
//             );
//         } else if (response.status === 404) {
//             console.log('Folder not found');
//         } else {
//             console.log('Error deleting Folder');
//         }
//     } catch (error) {
//         console.log('An error occurred', error);
//     }
// }

// export default deleteFolder;