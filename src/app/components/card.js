import { useChronycData } from "@/context/ChronycProvider";

export function Card() {
  const { trackingData, timeData, clientData } = useChronycData();
  return (
    <div className="w-full flex gap-4 p-4">
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between card-animated">
        <h3 className="font-bold text-base">
          Current ref:
          <span className="text-sm block mt-1">
            {trackingData?.reference ?? "no reference"}
          </span>
        </h3>
        <div className="pt-3 text-xs">
          <p>
            NTP Status:{" "}
            {timeData?.NTP_service === "active" ? "Active" : "Inactive"}
          </p>
          <p>
            Clock Sync:{" "}
            {timeData?.System_clock_synchronized === "yes"
              ? "Synced"
              : "Not Synced"}
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between card-animated">
        <h3 className="font-bold text- text-2xl flex justify-center pt-4">
          Active Client: {clientData?.length}
        </h3>
        <p className="text-xs pt-3">Currently connected client</p>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between card-animated">
        <h3 className="font-bold text-lg">
          Offset: {trackingData?.lastOffset ?? "-"}
        </h3>
        <p className="text-xs pt-3">Difference of time</p>
      </div>
    </div>
  );
}
