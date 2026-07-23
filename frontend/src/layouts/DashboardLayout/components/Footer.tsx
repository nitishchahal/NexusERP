import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto flex h-14 items-center justify-between border-t border-slate-200 bg-white px-8">

      <div className="flex items-center gap-2 text-sm text-slate-500">
        <ShieldCheck
          size={16}
          className="text-emerald-500"
        />

        <span>
          NexusERP Enterprise
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm text-slate-400">

        <span>
          Version 1.0.0
        </span>

        <span>
          Build 2026.07
        </span>

        <span>
          © {new Date().getFullYear()} NexusERP
        </span>

      </div>

    </footer>
  );
};

export default Footer;