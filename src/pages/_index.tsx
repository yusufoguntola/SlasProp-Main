import { AuthProvider } from "@/hooks/use-auth";
import { Footer } from "@/sections/Footer";

const App = () => {
  return (
    <AuthProvider>
      <Footer />
    </AuthProvider>
  );
};

export default App;

//  <Routes>
//    <Route path="/" element={<Homepage />} />
//    <Route path="/property-details" element={<Properties />} />
//    <Route path="property-details/:id" element={<PropertyDetails />} />
//    <Route
//      path="/welcome"
//      element={
//        <ProtectedRoute>
//          <WelcomePage />
//        </ProtectedRoute>
//      }
//    ></Route>
//    <Route path="/dashboard" element={<ClaimantPage />}>
//      <Route index element={<Dashboard />} />
//      <Route path="my-properties" element={<MyProperties />} />
//      <Route path="add-property" element={<AddProperty />} />
//      <Route path="register-property" element={<RegisterTheProperty />} />
//      <Route path="registered-properties" element={<RegisteredProperties />} />
//      <Route path="messages" element={<Messages />} />
//      <Route path="notifications" element={<Notifications />} />
//      <Route path="settings" element={<Settings />} />
//    </Route>
//  </Routes>;
