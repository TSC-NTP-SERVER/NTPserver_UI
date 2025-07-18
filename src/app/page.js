"use client";

import { useState } from "react";

import { Header } from "./components/header";
import { Navbar } from "./components/nav";
import { TrackingPage } from "./components/track";
import { ClientPage } from "./components/client";
import { ClockStatusPage } from "./components/clock";
import { Card } from "./components/card";

import { useChronycData } from "@/context/ChronycProvider";

export default function Home() {
  const { wsConnected } = useChronycData();

  const [activePage, setActivePage] = useState("clock");

  const renderSubpage = () => {
    switch (activePage) {
      case "tracking":
        return <TrackingPage />;
      case "client":
        return <ClientPage />;
      case "clock":
        return <ClockStatusPage />;
      default:
        return <ClockStatusPage />;
    }
  };

  return (
    <>
      <main className="h-screen flex flex-col bg-white text-black font-mono p-6">
        <div className="flex-shrink-0 pb-0">
          <Header />
          <Card />

          <section className="flex flex-wrap">
            <div className="w-2/3 flex align-middle pl-2 pb-1">
              <Navbar onSelect={setActivePage} activePage={activePage} />
            </div>
            <div className="w-1/3 flex justify-end pr-2">
              <div className="p-2 m-2 bg-white border border-black rounded pl-3 pr-3">
                <ul>
                  <li className="text-xs">WebSocket connection</li>
                  <li className="pt-1">
                    Server status:{" "}
                    <span
                      className={`font-semibold ${
                        wsConnected ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {wsConnected ? "Online" : "Offline"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="flex-1 flex justify-center pt-2 min-h-0 pl-4 pr-3">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-black w-full overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto">{renderSubpage()}</div>
          </div>
        </section>
      </main>
    </>
  );
}