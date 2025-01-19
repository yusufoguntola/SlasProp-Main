export function Loader() {
  return (
    <div className="flex flex-col gap-6 w-full pt-14">
      {new Array(3).fill("").map((_, idx) => (
        <div key={idx} className="h-48 bg-gray-100 rounded-xl" />
      ))}
    </div>
  );
}
