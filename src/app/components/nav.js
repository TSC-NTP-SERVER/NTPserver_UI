export function Navbar({ onSelect }) {
  return (
    <nav className=" text-black pl-4 p-4 flex">
      <div className="inline-flex justify-start space-x-6">
        <button onClick={() => onSelect(1)} className="hover:text-white hover:bg-black border-black px-3 py-1 rounded-3xl border-2 font-semibold">
          Clock Status
        </button>
        <button onClick={() => onSelect(2)} className="hover:text-white hover:bg-black border-black px-3 py-1 rounded-3xl border-2 font-semibold">
          Tracking
        </button>
        <button onClick={() => onSelect(3)} className="hover:text-white hover:bg-black border-black px-3 py-1 rounded-3xl border-2 font-semibold">
          Client
        </button>
      </div>
    </nav>
  );
}