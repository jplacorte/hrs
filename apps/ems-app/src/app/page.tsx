import { HydrateClient } from "~/trpc/server";
import { AuthShowcase } from "./_components/auth-showcase";
import { EmployeeView } from "./_components/employee-grid";

export default function HomePage() {
  return (
    <HydrateClient>
      <main className="container py-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <AuthShowcase />
          <EmployeeView />
        </div>
      </main>
    </HydrateClient>
  );
}
