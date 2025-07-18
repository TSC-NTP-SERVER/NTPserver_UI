"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ChronycContext = createContext();

export const ChronycProvider = ({ children }) => {
  const [trackingData, setTrackingData] = useState(null);
  const [timeData, setTimeData] = useState(null);
  const [clientData, setClientData] = useState([]);

  const [wsConnected, setWsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");

    ws.onopen = () => {
      console.log("WebSocket connected");
      setWsConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);

        if (message.type === "chronyc") {
          const { tracking, time, client } = message.data;

          setTrackingData({
            reference: tracking.Reference_ID,
            stratum: tracking.Stratum,
            refTime: tracking["Ref_time_(UTC)"],
            systemTime: tracking.System_time,
            lastOffset: tracking.Last_offset,
            rmsOffset: tracking.RMS_offset,
            frequency: tracking.Frequency,
            residualFreq: tracking.Residual_freq,
            skew: tracking.Skew,
            rootDelay: tracking.Root_delay,
            rootDispersion: tracking.Root_dispersion,
            updateInterval: tracking.Update_interval,
            leapStatus: tracking.Leap_status,
          });

          setTimeData(time);

          const formattedClients = (client.Clients || []).map((c) => ({
            hostname: c.Hostname || null,
            ntp: c.NTP || null,
            drop_ntp: c.Drop_ntp || null,
            int_ntp: c.Int_ntp || null,
            intl: c.IntL || null,
            last_ntp: c.Last_ntp || null,
            cmd: c.Cmd || null,
            drop_cmd: c.Drop_cmd || null,
            int_cmd: c.Int_cmd || null,
            last_cmd: c.Last_cmd || null,
          }));

          setClientData(formattedClients);
        } else if (message.message === "Connected to WebSocket Server") {
          console.log("Server greeting:", message.message);
        } else {
          console.warn("Unknown message type:", message);
        }
      } catch (err) {
        console.error("Failed to parse WebSocket message:", err);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setWsConnected(false);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      setWsConnected(false);
    };

    return () => ws.close();
  }, []);

  return (
    <ChronycContext.Provider
      value={{ trackingData, timeData, clientData, wsConnected }}
    >
      {children}
    </ChronycContext.Provider>
  );
};

// Exportable hook
export const useChronycData = () => useContext(ChronycContext);
