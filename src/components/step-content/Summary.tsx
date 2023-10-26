export default function Summary() {
  return (
    <div>
      <div className="grid gap-6 bg-sky-50 p-6 rounded-lg">
        <header>
          <div className="flex justify-between gap-4 items-center">
            <h3 className="font-bold text-blue-900">Arcade (Yearly)</h3>
            <p className="font-bold">+$90/yr</p>
          </div>
          <button className="underline">Change</button>
        </header>
        <hr />
        <div className="flex justify-between gap-4 items-center">
          <h3 className="text-gray-400">Online service</h3>
          <p>+$10/yr</p>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <h3 className="text-gray-400">Larger storage</h3>
          <p>+$20/yr</p>
        </div>
      </div>
      <footer className="flex justify-between gap-4 items-center p-6">
        <h3 className="text-gray-400">Total (per year)</h3>
        <p className="font-bold text-violet-700 text-xl">+$120/yr</p>
      </footer>
    </div>
  );
}
