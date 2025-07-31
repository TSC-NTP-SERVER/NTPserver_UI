"use client";
import React from "react";
import { useChronycData } from "@/context/ChronycProvider";
import { formatDateTime } from "../func/formatDate.js"

export function Header() {
  const { trackingData, timeData } = useChronycData();

  const fullTimeZone = timeData?.Time_zone || "missing timezone data";
  console.log(`${timeData?.Time_zone}`);
  const tzName = fullTimeZone.split(" ")[0];

  return (
    <main className=" text-black">
      <h2 className="text-xl font-semibold mb-4 pl-4">NTP Dashboard</h2>
      <section className="flex flex-wrap">
        <div className="w-1/6 p-4 flex justify-start">
          <div className="pl-6 p-4 border rounded-xl w-80 font-extrabold">
            STRATUM : {trackingData?.stratum ?? "-"}
          </div>
        </div>

        <div className="w-4/6 p-6 text-left">
          <ul className="text-sm">
            <li>
              UTC Time:{" "}
              {timeData?.Universal_time
                ? `${formatDateTime(timeData.Universal_time, "UTC")} (UTC)`
                : "Loading..."}
            </li>
            <li>
              Local Time:{" "}
              {timeData?.Local_time
                ? `${formatDateTime(
                    timeData.Local_time,
                    tzName
                  )} (${fullTimeZone})`
                : "Loading..."}
            </li>
          </ul>
        </div>

        <div className="w-1/6 p-4 flex justify-end">
          <div className="pr-6 p-2 rounded w-80 text-right">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-white text-black rounded border-black transition transform hover:scale-95 hover:bg-black hover:text-white"
            >
              Refresh
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
