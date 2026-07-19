import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const current = location.pathname
    .split("/")
    .filter(Boolean)
    .join(" / ");

  return (
    <div className="border-b bg-white px-6 py-3 text-sm text-slate-500 capitalize">
      {current || "Dashboard"}
    </div>
  );
};

export default Breadcrumb;