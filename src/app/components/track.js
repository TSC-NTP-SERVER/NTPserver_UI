// TrackingPage.js
import { useChronycData } from "@/context/ChronycProvider";

export const TrackingPage = () => {
  const { trackingData } = useChronycData();

  if (!trackingData) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <p className="text-gray-500">Loading tracking data...</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-10">NTP Tracking Information</h2>
      <div className="bg-gray-50 p-6 rounded border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Reference ID:</span>{" "}
              {trackingData.reference}
            </p>
            <p>
              <span className="font-semibold">Stratum:</span>{" "}
              {trackingData.stratum}
            </p>
            <p>
              <span className="font-semibold">Ref Time (UTC):</span>{" "}
              {trackingData.refTime}
            </p>
            <p>
              <span className="font-semibold">System Time:</span>{" "}
              {trackingData.systemTime}
            </p>
            <p>
              <span className="font-semibold">Last Offset:</span>{" "}
              {trackingData.lastOffset}
            </p>
            <p>
              <span className="font-semibold">RMS Offset:</span>{" "}
              {trackingData.rmsOffset}
            </p>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Frequency:</span>{" "}
              {trackingData.frequency}
            </p>
            <p>
              <span className="font-semibold">Residual Frequency:</span>{" "}
              {trackingData.residualFreq}
            </p>
            <p>
              <span className="font-semibold">Skew:</span> {trackingData.skew}
            </p>
            <p>
              <span className="font-semibold">Update Interval:</span>{" "}
              {trackingData.updateInterval}
            </p>
            <p>
              <span className="font-semibold">Root Delay:</span>{" "}
              {trackingData.rootDelay}
            </p>
            <p>
              <span className="font-semibold">Root Dispersion:</span>{" "}
              {trackingData.rootDispersion}
            </p>
            <p>
              <span className="font-semibold">Leap Status:</span>{" "}
              {trackingData.leapStatus}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
