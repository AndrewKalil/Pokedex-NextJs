import { FC } from "react";

import { Card, Row, Text } from "@nextui-org/react";

import { SimplePokemon } from "../../../interfaces";
import { useRouter } from "next/router";

interface IProps {
  pokemon: SimplePokemon;
}

export const PokemonCard: FC<IProps> = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <Card
      isHoverable
      isPressable
      className="border-none"
      onClick={onClick}
      css={{ ds: "none" }}
    >
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={img} width={"100%"} height={140} loading="lazy" />
        <Card.Footer>
          <Row justify="space-between">
            <Text className="uppercase" css={{ textTransform: "capitalize" }}>
              {name}
            </Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
