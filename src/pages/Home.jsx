import { Info, Search, User } from "../components";
import { Loader } from "../components/Loader";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const Home = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <Search />
        <Loader />
      </main>
    );
  }

  return (
    <main>
      <Search />
      <Info />
      <User />
    </main>
  );
};
