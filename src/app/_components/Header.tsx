export default function Header() {
  return (
    <div>
      <header className="relative bg-black p-4 text-white">
        <h1 className="text-center text-xl">Home.io</h1>
        <button
          type="button"
          title="Toggle Add"
          className="absolute right-4 top-4 rounded-md border-2 border-white px-2"
        >
          +
        </button>
      </header>
    </div>
  );
}
