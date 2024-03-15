import React, { createContext, useState } from "react";
import Homepage from "./pages/Homepage";
import WelcomePage from "./pages/WelcomePage";
import ClaimantPage from "./pages/ClaimantPage";
import Footer from "./sections/Footer";
import { AuthProvider } from "./hooks/useAuth";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";
import MyProperties from "./pages/MyProperties";
import AddProperty from "./pages/AddProperty";
import RegisteredProperties from "./pages/RegisteredProperties";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import RegisterTheProperty from "./pages/RegisterTheProperty";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";

export const OptionContext = createContext();


const App = () =>{

    const [option, setOption] = useState(true);

   return(
            <>
            <AuthProvider>
                <OptionContext.Provider value={{option, setOption}}>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/property-details' element={<Properties/>}/>
                        <Route path ='property-details/:id' element={<PropertyDetails/>}/>                         
                        <Route
                            path="/welcome"
                            element={
                                <ProtectedRoute>
                                    <WelcomePage />
                                </ProtectedRoute>
                            }
                        >
                        </Route>
                        <Route path="/dashboard" element={<ClaimantPage/>}>
                            <Route index element={<Dashboard />} />
                            <Route path='my-properties' element={<MyProperties/>}/>
                            <Route path='add-property' element={<AddProperty/>}/>
                            <Route path='register-property' element={<RegisterTheProperty/>}/>
                            <Route path='registered-properties' element={<RegisteredProperties/>}/>
                            <Route path='messages' element={<Messages/>}/>      
                            <Route path='notifications' element={<Notifications/>}/> 
                            <Route path='settings' element={<Settings/>}/>                                                                                                   
                        </Route>
                    </Routes>
                    <Footer/>
                </OptionContext.Provider>
            </AuthProvider>

            </>
        );
}

export default App