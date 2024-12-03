import { ImageCard } from "@/components/ImageCard";
import { SearchBar } from "@/components/SearchBar";

export function HomeImageContainer() {
  return (
    <div className="relative w-full flex flex-col">
      <ImageCard />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-2">
        <div className=" flex items-center justify-center flex-col gap-2 w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
