import { Bell, Search, UserCircle2 } from "lucide-react";

const Topbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-3 rounded-lg border px-4 py-2">
        <Search size={18} />

        <input
          placeholder="Search..."
          className="outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="cursor-pointer" />

        <UserCircle2 size={32} />
      </div>
    </header>
  );
};

export default Topbar;