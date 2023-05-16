import { FC } from "react";

import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface IProps {
  id: number;
}

export const FavoritePokemonCard: FC<IProps> = ({ id }) => {
  const router = useRouter();

  const onCardClikc = () => {
    router.push(`/pokemon-id/${id}`);
  };

  return (
    <Card
      isHoverable
      isPressable
      css={{ p: 10, ds: "none" }}
      onClick={onCardClikc}
    >
      <Card.Image
        width={"100%"}
        height={140}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      />
    </Card>
  );
};
