import { useContext } from "react";
import GlobalVarContext from "../../GlobalVariables";

export default function Alert() {
    const { alert } = useContext(GlobalVarContext);
    return (
        <>
            {
                alert &&
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    {alert.msg}
                </div>
            }
        </>
    )
}
