import {
    Users,
    Package,
    IndianRupee,
    ShoppingCart,
  } from "lucide-react";
  
  export const dashboardStats = [
    {
      title: "Total Revenue",
      value: "₹12,45,000",
      icon: IndianRupee,
      color: "bg-green-500",
      change: "+12.5%",
    },
    {
      title: "Employees",
      value: 245,
      icon: Users,
      color: "bg-blue-500",
      change: "+5%",
    },
    {
      title: "Products",
      value: 1200,
      icon: Package,
      color: "bg-purple-500",
      change: "+18%",
    },
    {
      title: "Orders",
      value: 540,
      icon: ShoppingCart,
      color: "bg-orange-500",
      change: "+8%",
    },
  ];