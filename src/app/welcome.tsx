import { ImageCardWelcome } from "@/components/ImageCardWelcome";
import { ImageCardWelcomeSearched } from "@/components/ImageCardWelcomeSearched";
import { useSearch } from "@/hooks/use-search";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { NavBarContainer } from "@/sections/NavBarContainer";
import { WelcomeImageContiner } from "@/sections/WelcomeImageContainer";

export default function WelcomePage() {
  const { search } = useSearch();

  return (
    <ProtectedRoute>
      <NavBarContainer />
      <WelcomeImageContiner />
      {search ? <ImageCardWelcomeSearched /> : <ImageCardWelcome />}
    </ProtectedRoute>
  );
}
