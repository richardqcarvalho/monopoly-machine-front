export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-blue-900">
      <div className="hidden h-full w-full flex-col items-center justify-center sm:flex">
        <h1 className="text-2xl font-bold">Mobile-only application</h1>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 sm:hidden">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl">Welcome to</h1>
          <h2 className="text-2xl font-bold">Monopoly Machine</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute -top-4 left-3 bg-blue-900 p-2 text-xs"
            >
              Name
            </label>
            <input
              id="name"
              className="w-64 rounded-md border border-white bg-blue-900 px-4 py-3 text-sm outline-none placeholder:text-[#ffffff50]"
              placeholder="Type your name"
            />
          </div>
          <button className="w-64 rounded-md bg-white px-4 py-3 text-sm text-blue-900 outline-none">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
