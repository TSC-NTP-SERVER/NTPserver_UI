import { useChronycData } from "@/context/ChronycProvider";

export const ClockStatusPage = () => {
  const { timeData, trackingData } = useChronycData();

  if (!timeData && !trackingData) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <p className="text-gray-500">Loading clock status...</p>
      </div>
    );
  }

  const hiddenKeys = ["_id", "Timestamp"];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-10">Clock Status</h2>

      {timeData && (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Current Time Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(timeData)
              .filter(([key]) => !hiddenKeys.includes(key))
              .map(([key, value]) => (
                <div key={key} className="flex justify-between pl-2 pr-2">
                  <span className="text-gray-700 font-semibold">{key}:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
