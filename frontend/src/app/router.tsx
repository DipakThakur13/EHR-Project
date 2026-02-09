import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login';
import PatientDashboard from '../pages/patient/Dashboard';
import PatientRecords from '../pages/patient/Records';
import PatientConsents from '../pages/patient/Consents';
import PatientAudit from '../pages/patient/Audit';
import DoctorDashboard from '../pages/doctor/Dashboard';
import DoctorRecords from '../pages/doctor/Records';
import RequestAccess from '../pages/doctor/RequestAccess';
import RoleGuard from '../components/guards/RoleGuard';
import AppLayout from '../components/layout/AppLayout';

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },

  {
    path: '/patient',
    element: (
      <RoleGuard allowedRoles={['PATIENT']}>
        <AppLayout>
          <PatientDashboard />
        </AppLayout>
      </RoleGuard>
    ),
  },

  {
    path: '/doctor',
    element: (
      <RoleGuard allowedRoles={['DOCTOR']}>
        <AppLayout>
          <DoctorDashboard />
        </AppLayout>
      </RoleGuard>
    ),
  },

  { path: '/unauthorized', element: <div>Unauthorized</div> },
]);
