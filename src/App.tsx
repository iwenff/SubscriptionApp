import { Routes, Route } from 'react-router-dom';

import NotFoundpage from './NotFoundpage';
import UserInfo from './pages/UserInfo';
import SelectPlan from './pages/SelectPlan';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';

export function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#EFF5FF',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/selectplan" element={<SelectPlan />} />
          <Route path="/addons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </div>
    </>
  );
}
