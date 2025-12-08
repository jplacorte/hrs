// This file will contain shared types.

export type EmployeeStatus = "Active" | "On Leave" | "Terminated";

export interface Employee {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  avatarUrl: string;
  department: string;
  status: EmployeeStatus;
  hireDate: string;
  location: string;
}