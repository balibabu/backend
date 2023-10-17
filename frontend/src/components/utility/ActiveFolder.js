import { useContext } from "react";
import GlobalVarContext from "../../GlobalVariables";

export default function ActiveFolder({ foldername }) {
    const { setCurrenFolderName } = useContext(GlobalVarContext);
    // if()
    setCurrenFolderName(foldername);
    return;
}
