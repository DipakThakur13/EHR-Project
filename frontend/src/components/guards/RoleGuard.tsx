import { Navigate } from 'react-router-dom';
import { UserRole } from '../../types';
import { useAuth } from '../../hooks/useAuth';

interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: JSX.Element;
}

export default function RoleGuard({
  allowedRoles,
  children,
}: RoleGuardProps) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user!.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
