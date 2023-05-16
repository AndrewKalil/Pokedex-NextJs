import { FC } from "react";

import { Grid } from "@nextui-org/react";

import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface IProps {
  data: number[];
}

export const FavoritePokemons: FC<IProps> = ({ data }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {data.map((id) => {
        return (
          <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <FavoritePokemonCard id={id} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};
