import {useContext} from "react";
import { AuthContext } from "../context/Context";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;