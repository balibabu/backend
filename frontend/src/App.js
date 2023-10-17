import { AuthProvider } from './AuthContext';
import AuthenticateRoute from './AuthenticateRoute';
import { AllFilesAndFoldersProvider } from './FilesAndFolders';
import './App.css'
import { GlobalVarProvider } from './GlobalVariables';


function App() {
    return (
        <AuthProvider>
            <AllFilesAndFoldersProvider>
                <GlobalVarProvider>
                    <AuthenticateRoute />
                </GlobalVarProvider>
            </AllFilesAndFoldersProvider>
        </AuthProvider>
    );
}

export default App;
