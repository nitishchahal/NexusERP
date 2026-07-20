import { ShieldCheck, Users, BarChart3 } from "lucide-react";

import NexusLogo from "../../../assets/nexus-logo.svg"; // adjust path to match where you place it
import { Card, CardContent } from "../../../components";
import { LoginForm } from "../components";
import  AuthHeader  from "../../../../src/layouts/AuthLayout/AuthHeader"

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Role-based access, encrypted end to end.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Departments, roles and permissions in sync.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Live KPIs across sales, HR and finance.",
  },
];

const LoginPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0b0e1a]">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12163a] via-[#0b0e1a] to-[#1a0f2e]" />
        <div className="absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-indigo-600/25 blur-[110px]" />
        <div className="absolute -bottom-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/[0.15] blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:28px_28px]" />
      </div>

      <div className="relative z-10 grid h-full w-full grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        {/* Left — illustration + copy */}
        <div className="hidden flex-col justify-between overflow-hidden p-10 lg:flex xl:p-14">
        
         {/* Brand */}
<div className="flex items-center justify-center">
  <img src={NexusLogo} alt="NexusERP" className="h-18 w-auto xl:h-18" />
</div>

          {/* Abstract illustration */}
          <div className="relative -my-6 flex flex-1 items-center justify-center">
            <svg
              viewBox="0 0 480 380"
              className="w-full max-w-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Floating dashboard card */}
              <rect
                x="70"
                y="60"
                width="220"
                height="150"
                rx="16"
                fill="white"
                fillOpacity="0.06"
                stroke="white"
                strokeOpacity="0.12"
              />
              <rect x="94" y="84" width="70" height="8" rx="4" fill="url(#g2)" />
              <rect x="94" y="102" width="140" height="6" rx="3" fill="white" fillOpacity="0.15" />
              <rect x="94" y="116" width="100" height="6" rx="3" fill="white" fillOpacity="0.1" />

              {/* Bar chart inside card */}
              <rect x="94" y="150" width="16" height="40" rx="3" fill="url(#g1)" fillOpacity="0.9" />
              <rect x="120" y="135" width="16" height="55" rx="3" fill="url(#g1)" fillOpacity="0.7" />
              <rect x="146" y="160" width="16" height="30" rx="3" fill="url(#g1)" fillOpacity="0.5" />
              <rect x="172" y="145" width="16" height="45" rx="3" fill="url(#g1)" fillOpacity="0.65" />

              {/* Floating stat pill (overlapping) */}
              <g transform="translate(230, 190)">
                <rect
                  width="150"
                  height="70"
                  rx="14"
                  fill="white"
                  fillOpacity="0.08"
                  stroke="white"
                  strokeOpacity="0.14"
                />
                <circle cx="28" cy="35" r="14" fill="url(#g1)" fillOpacity="0.85" />
                <rect x="52" y="22" width="80" height="7" rx="3.5" fill="white" fillOpacity="0.2" />
                <rect x="52" y="38" width="55" height="6" rx="3" fill="white" fillOpacity="0.12" />
              </g>

              {/* Ring / donut accent */}
              <circle
                cx="360"
                cy="110"
                r="46"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="10"
                strokeDasharray="180 220"
                strokeLinecap="round"
                opacity="0.85"
              />
              <circle cx="360" cy="110" r="46" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="10" />

              {/* Floating dots */}
              <circle cx="60" cy="270" r="5" fill="#c084fc" opacity="0.7" />
              <circle cx="410" cy="260" r="4" fill="#818cf8" opacity="0.6" />
              <circle cx="330" cy="290" r="3" fill="#f0abfc" opacity="0.5" />

              {/* Connecting line */}
              <path
                d="M 180 210 Q 220 250 280 230"
                stroke="url(#g2)"
                strokeWidth="2"
                strokeDasharray="4 6"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Headline */}
          <div>
            <h2 className="max-w-md text-[2.35rem] font-bold leading-[1.15] tracking-tight text-white">
              Run your business
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                {" "}
                from one place.
              </span>
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-indigo-200/50">
              Powerful ERP for HR, CRM, Inventory, Sales and Finance —
              unified in a single workspace.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-colors hover:bg-white/[0.07]"
                >
                  <feature.icon size={16} className="text-indigo-300" />
                  <p className="mt-2 text-xs font-semibold text-white">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-indigo-200/40">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — auth card */}
        <div className="flex h-full items-center justify-center overflow-y-auto p-5 sm:p-8">
          <Card className="w-full max-w-[380px] rounded-3xl border border-white/[0.08] bg-white/[0.05] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <CardContent className="space-y-6 p-7 sm:p-8">
              {/* Mobile brand mark */}
              {/* <div className="flex items-center justify-center lg:hidden">
  <img src={NexusLogo} alt="NexusERP" className="h-18 w-auto" />
</div> */}

<AuthHeader
  icon={
    <img
      src={NexusLogo}
      alt="NexusERP"
      className="h-14 w-auto drop-shadow-[0_4px_24px_rgba(129,140,248,0.4)] sm:h-16"
    />
  }
  title="Welcome back"
  subtitle="Sign in to continue to your workspace"
/>

              <LoginForm />

              <div className="border-t border-white/[0.08] pt-5 text-center text-xs text-indigo-200/30">
                © {new Date().getFullYear()} NexusERP. All rights reserved.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;