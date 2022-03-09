import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import MessegBody from "./component/MessegBody";
import Messege from "./component/Messege";
import Appointment from "./component/Appointment.jsx"
import AddAdmin from "./component/AddAdmin";
import ManageUser from "./component/ManageUser";
import Login from "./component/Login";
import AuthProvider from "./context/Context";
import PrivateRoute from "./component/private/PrivateRoute";
function App() {
  return (
    <div>
    <AuthProvider>
     <BrowserRouter>
       <Routes>
         <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="massage/*" element={<Messege />}> 
                 <Route path=":id" element={<MessegBody />} />
            </Route>
            <Route path ="apointment" element={<Appointment />} />
            <Route path="addAdmin" element={<AddAdmin />} />
            <Route path="manageAdmin" element={<ManageUser />} />
         </Route>
         <Route path="/login" element={<Login />} />
       </Routes>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
