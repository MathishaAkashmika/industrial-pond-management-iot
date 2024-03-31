import { Route, Routes } from "react-router-dom";
import Userdash from "../pages/Userdash";
import Temperature from "../components/Temperature";
import PHsensor from "../components/PHsensor";
import Turbidity from "../components/Turbidity";
import Waterlevel from "../components/Waterlevel";
import Ammonia from "../components/Ammonia";
import Waterpressure from "../components/waterpressure";
import Waterflow from "../components/Waterflow";

const AppRoutes = () => (
    <Routes>
        <Route path="" element={<Userdash />} />
        <Route path="temp" element={<Temperature />} />
        <Route path="ph" element={<PHsensor />} />
        <Route path="turbidity" element={<Turbidity />} />
        <Route path="waterlevel" element={<Waterlevel />} />
        <Route path="ammonia" element={<Ammonia />} />
        <Route path="waterpressure" element={<Waterpressure />} />
        <Route path="waterflow" element={<Waterflow />} />
    </Routes>
);

export default AppRoutes;
