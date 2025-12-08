type EmployeeStatus = "Active" | "On Leave" | "Terminated";

interface Props {
  status: EmployeeStatus;
}

export default function Tag({ status }: Props) {
  const statusColors: Record<EmployeeStatus, string> = {
    Active: "bg-green-100 text-green-800",
    "On Leave": "bg-yellow-100 text-yellow-800",
    Terminated: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[status]}`}
    >
      {status}
    </span>
  );
}
