import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen p-2">
        <aside className="w-64 bg-white shadow-2xl text-black p-4">
          <nav className="space-y-4 flex flex-col">
            <Link to={"/app/dashboard"}>Dashboard</Link>
            <Link to={"/app/flashcard "}>Flashcard</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-blue-50 overflow-y-auto">
          <Outlet />
        </main>
    </div>
  );
};

export default AppLayout;
