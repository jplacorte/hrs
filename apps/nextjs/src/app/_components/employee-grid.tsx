"use client";

import { useState } from "react";

// --- DATA AND TYPES ---

type EmployeeStatus = "Active" | "On Leave" | "Terminated";

interface Employee {
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

const mockEmployees: Employee[] = [
  {
    id: "EMP001",
    name: "Alice Johnson",
    position: "Software Engineer",
    email: "alice.j@example.com",
    phone: "123-456-7890",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Alice+Johnson&background=random",
    department: "Engineering",
    status: "Active",
    hireDate: "2022-08-15",
    location: "New York, NY",
  },
  {
    id: "EMP002",
    name: "Bob Williams",
    position: "Product Manager",
    email: "bob.w@example.com",
    phone: "123-456-7891",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Bob+Williams&background=random",
    department: "Product",
    status: "Active",
    hireDate: "2021-03-20",
    location: "San Francisco, CA",
  },
  {
    id: "EMP003",
    name: "Charlie Brown",
    position: "UX Designer",
    email: "charlie.b@example.com",
    phone: "123-456-7892",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Charlie+Brown&background=random",
    department: "Design",
    status: "On Leave",
    hireDate: "2023-01-10",
    location: "Austin, TX",
  },
  {
    id: "EMP004",
    name: "Diana Prince",
    position: "Data Scientist",
    email: "diana.p@example.com",
    phone: "123-456-7893",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Diana+Prince&background=random",
    department: "Data",
    status: "Active",
    hireDate: "2020-05-25",
    location: "Chicago, IL",
  },
  {
    id: "EMP005",
    name: "Ethan Hunt",
    position: "DevOps Engineer",
    email: "ethan.h@example.com",
    phone: "123-456-7894",
    avatarUrl: "https://ui-avatars.com/api/?name=Ethan+Hunt&background=random",
    department: "Engineering",
    status: "Active",
    hireDate: "2022-11-30",
    location: "New York, NY",
  },
  {
    id: "EMP006",
    name: "Fiona Glenanne",
    position: "QA Tester",
    email: "fiona.g@example.com",
    phone: "123-456-7895",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Fiona+Glenanne&background=random",
    department: "Engineering",
    status: "Terminated",
    hireDate: "2019-07-19",
    location: "San Francisco, CA",
  },
  {
    id: "EMP007",
    name: "George Costanza",
    position: "Architect",
    email: "george.c@example.com",
    phone: "123-456-7896",
    avatarUrl:
      "https://ui-avatars.com/api/?name=George+Costanza&background=random",
    department: "Sales",
    status: "Active",
    hireDate: "2021-09-01",
    location: "New York, NY",
  },
  {
    id: "EMP008",
    name: "Heidi Klum",
    position: "Marketing Lead",
    email: "heidi.k@example.com",
    phone: "123-456-7897",
    avatarUrl: "https://ui-avatars.com/api/?name=Heidi+Klum&background=random",
    department: "Marketing",
    status: "Active",
    hireDate: "2023-02-14",
    location: "Los Angeles, CA",
  },
  {
    id: "EMP009",
    name: "Ivan Drago",
    position: "Security Consultant",
    email: "ivan.d@example.com",
    phone: "123-456-7898",
    avatarUrl: "https://ui-avatars.com/api/?name=Ivan+Drago&background=random",
    department: "Security",
    status: "On Leave",
    hireDate: "2022-12-01",
    location: "Chicago, IL",
  },
  {
    id: "EMP010",
    name: "Julia Child",
    position: "Chief Financial Officer",
    email: "julia.c@example.com",
    phone: "123-456-7899",
    avatarUrl: "https://ui-avatars.com/api/?name=Julia+Child&background=random",
    department: "Finance",
    status: "Active",
    hireDate: "2018-04-12",
    location: "New York, NY",
  },
];

const statusColors: Record<EmployeeStatus, string> = {
  Active: "bg-green-100 text-green-800",
  "On Leave": "bg-yellow-100 text-yellow-800",
  Terminated: "bg-red-100 text-red-800",
};

// --- ICONS ---
const DotsVerticalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
    />
  </svg>
);
const GridIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75h2.25A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75A2.25 2.25 0 0115.75 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  </svg>
);
const ListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

// --- REUSABLE COMPONENTS ---

function ActionsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-2 hover:bg-slate-100"
      >
        <DotsVerticalIcon />
      </button>
      {isOpen && (
        <div className="ring-opacity-5 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            View Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            Edit
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            Flag
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-red-700 hover:bg-slate-100"
          >
            Delete
          </a>
        </div>
      )}
    </div>
  );
}

// --- GRID/TILE VIEW ---

function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <div className="bg-card text-card-foreground flex transform-gpu flex-col justify-between rounded-xl border shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">
      <div className="p-6">
        <div className="flex w-full items-start justify-between">
          <div className="flex w-full items-center gap-4">
            <img
              src={employee.avatarUrl}
              alt={`${employee.name}'s avatar`}
              className="h-16 w-16 rounded-full"
            />
            <div className="w-full">
              <div className="flex w-full justify-between">
                <h3 className="truncate text-xl font-semibold tracking-tight">
                  {employee.name}
                </h3>{" "}
                <ActionsMenu />
              </div>
              <p className="text-muted-foreground text-sm">
                {employee.position}
              </p>
              <p className="text-muted-foreground text-sm">
                {employee.department}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[employee.status]}`}
          >
            {employee.status}
          </span>
          <a
            href={`mailto:${employee.email}`}
            className="text-primary text-sm hover:underline"
          >
            {employee.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function EmployeeGridView({ employees }: { employees: Employee[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

// --- TABLE VIEW ---

function EmployeeTableView({ employees }: { employees: Employee[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th
              scope="col"
              className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-slate-900 sm:pl-6"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Position
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Department
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Hire Date
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
            >
              Location
            </th>
            <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-6">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-slate-50">
              <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-slate-900 sm:pl-6">
                {employee.id}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-500">
                {employee.name}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[employee.status]}`}
                >
                  {employee.status}
                </span>
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-500">
                {employee.position}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-500">
                {employee.department}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-500">
                {employee.email}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-500">
                {employee.phone}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-500">
                {employee.hireDate}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-500">
                {employee.location}
              </td>
              <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6">
                <ActionsMenu />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- MAIN COMPONENT ---

export function EmployeeView() {
  const [view, setView] = useState<"grid" | "table">("grid");

  return (
    <div className="w-full max-w-7xl">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
        Employee Directory
      </h2>
      <div className="mb-6 flex justify-end">
        <div className="inline-flex rounded-md border">
          <button
            onClick={() => setView("grid")}
            className={`rounded-l-md px-3 py-2 transition-colors ${view === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent bg-transparent"}`}
          >
            <GridIcon />
          </button>
          <button
            onClick={() => setView("table")}
            className={`rounded-r-md px-3 py-2 transition-colors ${view === "table" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent bg-transparent"}`}
          >
            <ListIcon />
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <EmployeeGridView employees={mockEmployees} />
      ) : (
        <EmployeeTableView employees={mockEmployees} />
      )}
    </div>
  );
}
