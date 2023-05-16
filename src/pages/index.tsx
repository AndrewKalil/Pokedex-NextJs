import { NextPage } from "next";
import { GetStaticProps } from "next";

import { Grid } from "@nextui-org/react";

import { MainLayout } from "@/components/layouts";
import { pokeApi } from "./api";
import { PokemonsData, SimplePokemon } from "../../interfaces";
import { PokemonCard } from "@/components/pokemon";

interface IProps {
  pokemons: SimplePokemon[];
}

const HomePage: NextPage<IProps> = ({ pokemons }) => {
  return (
    <MainLayout title="Listado de pokemons ">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => {
          return (
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          );
        })}
      </Grid.Container>
    </MainLayout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsData>("/pokemon?limit=151"); // your fetch function here

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg
  const pokemons: SimplePokemon[] = data.results.map((pokemon, idx) => {
    const index = idx + 1;
    return {
      ...pokemon,
      id: index,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`,
    };
  });

  return {
    props: { pokemons },
  };
};

export default HomePage;
