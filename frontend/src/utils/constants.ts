import { UserRole } from '../types';

export interface NavItem {
  label: string;
  path: string;
  roles: UserRole[];
}

export const NAV_ITEMS: NavItem[] = [
  // Patient
  { label: 'Dashboard', path: '/patient', roles: ['PATIENT'] },
  { label: 'My Records', path: '/patient/records', roles: ['PATIENT'] },
  { label: 'Consent Requests', path: '/patient/consents', roles: ['PATIENT'] },
  { label: 'Audit Logs', path: '/patient/audit', roles: ['PATIENT'] },

  // Doctor
  { label: 'Dashboard', path: '/doctor', roles: ['DOCTOR'] },
  { label: 'Request Access', path: '/doctor/request', roles: ['DOCTOR'] },
  { label: 'Approved Records', path: '/doctor/records', roles: ['DOCTOR'] },
];
