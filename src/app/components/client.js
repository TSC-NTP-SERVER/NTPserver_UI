import { useChronycData } from "@/context/ChronycProvider";

export const ClientPage = () => {
  const { clientData } = useChronycData();

  if (!clientData || clientData.length === 0) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <p className="text-gray-500">No client data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-5">NTP Client Information</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Hostname
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                NTP
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Drop_ntp
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Int_ntp
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                IntL
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Last_ntp
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Cmd
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Drop_cmd
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Int-cmd
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium border-b">
                Last_cmd
              </th>
            </tr>
          </thead>
          <tbody>
            {clientData.map((client, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 text-sm border-b">
                  {client.hostname}
                </td>
                <td className="px-4 py-2 text-sm border-b">{client.ntp}</td>
                <td className="px-4 py-2 text-sm border-b">
                  {client.drop_ntp}
                </td>
                <td className="px-4 py-2 text-sm border-b">{client.int_ntp}</td>
                <td className="px-4 py-2 text-sm border-b">{client.intl}</td>
                <td className="px-4 py-2 text-sm border-b">
                  {client.last_ntp}
                </td>
                <td className="px-4 py-2 text-sm border-b">{client.cmd}</td>
                <td className="px-4 py-2 text-sm border-b">
                  {client.drop_cmd}
                </td>
                <td className="px-4 py-2 text-sm border-b">{client.int_cmd}</td>
                <td className="px-4 py-2 text-sm border-b">
                  {client.last_cmd}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs">Total clients: {clientData.length}</p>
    </div>
  );
};
