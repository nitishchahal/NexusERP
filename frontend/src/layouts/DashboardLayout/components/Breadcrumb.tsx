import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  dashboard: "Dashboard",
  inventory: "Inventory",
  sales: "Sales",
  hrms: "HRMS",
  crm: "CRM",
  settings: "Settings",
  products: "Products",
  orders: "Orders",
  customers: "Customers",
  employees: "Employees",
};

const Breadcrumb = () => {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    return {
      href,
      label:
        routeLabels[segment] ||
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()),
      isLast: index === segments.length - 1,
    };
  });

  return (
    <div className="flex h-14 items-center border-b border-slate-200 bg-white px-8">

      <nav className="flex items-center text-sm">

        <Link
          to="/dashboard"
          className="flex items-center gap-2 rounded-lg px-2 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <Home size={16} />
          <span>Home</span>
        </Link>

        {breadcrumbs.map((item) => (
          <Fragment key={item.href}>

            <ChevronRight
              size={15}
              className="mx-2 text-slate-300"
            />

            {item.isLast ? (
              <span className="font-medium text-slate-900">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="rounded-lg px-2 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            )}

          </Fragment>
        ))}

      </nav>

    </div>
  );
};

export default Breadcrumb;