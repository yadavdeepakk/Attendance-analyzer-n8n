import React, { useState } from "react";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Menu } from "lucide-react";

const data = [
  { name: "Mon", Present: 22, Absent: 3, Late: 5 },
  { name: "Tue", Present: 24, Absent: 2, Late: 4 },
  { name: "Wed", Present: 20, Absent: 6, Late: 4 },
  { name: "Thu", Present: 23, Absent: 3, Late: 4 },
  { name: "Fri", Present: 25, Absent: 1, Late: 4 },
];

export default function AttendanceDashboard({ theme }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const bgMain = theme === "dark" ? "bg-slate-900" : "bg-gray-50";
  const textMain = theme === "dark" ? "text-white" : "text-slate-800";
  const cardBase =
    theme === "dark"
      ? "dark:bg-slate-800 dark:text-white border dark:border-slate-700"
      : "bg-gray-100 text-slate-700 border border-gray-200";
  const navBase =
    theme === "dark"
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-gray-200 shadow";
  const navText = theme === "dark" ? "text-white" : "text-slate-800";

  return (
    <div className={`min-h-screen ${bgMain} ${textMain} font-sans`}>
      <nav
        className={`${navBase} ${navText} border-b px-6 py-4 flex items-center justify-between`}
      >
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          🎓 <span>Attendance Analyzer</span>
        </h1>
        <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          <Menu className="w-6 h-6" />
        </button>
        <ul className="hidden md:flex gap-6 font-medium text-sm tracking-wide">
          <li>
            <a href="#" className="hover:text-cyan-500 transition">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-500 transition">
              Reports
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-500 transition">
              Settings
            </a>
          </li>
        </ul>
      </nav>

      {isNavOpen && (
        <ul className="flex flex-col md:hidden bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white px-6 py-4 gap-4">
          <li>
            <a href="#" className="hover:text-cyan-500 transition">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-500 transition">
              Reports
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-500 transition">
              Settings
            </a>
          </li>
        </ul>
      )}

      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <Card className={`${cardBase}`}>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-300">
                Total Users
              </p>
              <p className="text-2xl font-bold">30</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-900 border dark:border-emerald-700">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-emerald-700 dark:text-emerald-200">
                Present
              </p>
              <p className="text-2xl font-bold">25</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 dark:bg-yellow-900 border dark:border-yellow-700">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-yellow-700 dark:text-yellow-200">
                Late
              </p>
              <p className="text-2xl font-bold">4</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 dark:bg-rose-900 border dark:border-rose-700">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-rose-700 dark:text-rose-200">Absent</p>
              <p className="text-2xl font-bold">1</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 dark:bg-indigo-900 border dark:border-indigo-700">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-indigo-700 dark:text-indigo-200">
                Flagged
              </p>
              <p className="text-2xl font-bold">2</p>
            </CardContent>
          </Card>
        </div>

        <div className={`${cardBase} rounded-2xl shadow p-6 mb-6`}>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            📊 Weekly Attendance Trend
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} barCategoryGap={20} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#1e293b" : "#f8fafc",
                  color: theme === "dark" ? "#f1f5f9" : "#1e293b",
                  border: "none",
                }}
                cursor={{ fill: "#334155" }}
              />
              <Bar dataKey="Present" fill="#06b6d4" radius={[8, 8, 0, 0]} />
              <Bar dataKey="Late" fill="#facc15" radius={[8, 8, 0, 0]} />
              <Bar dataKey="Absent" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={`${cardBase} rounded-2xl shadow p-6`}>
          <h2 className="text-lg font-semibold mb-2">⚡ Quick Actions</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Refresh Data
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Send Emails
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Download Report
            </Button>
            <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
              Flag Repeats
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
