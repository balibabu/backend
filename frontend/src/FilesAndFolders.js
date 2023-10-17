import { createContext, useContext, useEffect, useState } from "react";
import getAllFiles from "./components/FileSystem/methods/getAllFiles";
import getAllFolders from "./components/FileSystem/methods/getAllFolders";
import AuthContext from "./AuthContext";

const AllFilesAndFolders = createContext();
export default AllFilesAndFolders;

export const AllFilesAndFoldersProvider = ({ children }) => {

    const [allFiles, setAllFiles] = useState([]);
    const [allFolders, setAllFolders] = useState([]);
    const { url, authTokens } = useContext(AuthContext);

    useEffect(() => {
        if (authTokens) {
            getAllFiles(url, authTokens, setAllFiles);
            getAllFolders(url, authTokens, setAllFolders);
        }
    }, [authTokens]);

    function getFolder(id) {
        return allFolders.find(obj => obj.id === Number(id));
    }

    function getChildrenFolders(parentId) {
        return allFolders.filter(obj => obj.parentFolder === parentId);
    }

    const contextData = {
        allFiles,
        allFolders,
        setAllFiles,
        setAllFolders,
        getFolder,
        getChildrenFolders
    }

    return (
        <AllFilesAndFolders.Provider value={contextData}>
            {children}
        </AllFilesAndFolders.Provider>
    );
}