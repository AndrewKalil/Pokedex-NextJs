import { useEffect, useState } from "react";

import { MainLayout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localstorageServices } from "../../../utils";
import { FavoritePokemons } from "@/components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localstorageServices.pokemons());
  }, []);

  return (
    <MainLayout title="Listado de favoritos">
      {favoritePokemons.length < 1 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons data={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
