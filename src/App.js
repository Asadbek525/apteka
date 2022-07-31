import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import NotFound from './Pages/NotFound';
import { Fragment } from 'react';
import Dashboard from './Pages/Dashboard';
function App() {
  return <Fragment>
    <Routes>
      <Route path="/" element={<Navigate to='signin' />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Fragment>
}
export default App;