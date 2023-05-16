import React from "react";
import Image from "next/image";
import NextLink from "next/link";

import { Spacer, Text, Link } from "@nextui-org/react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToFavorites = () => {
    router.push("/favorites");
  };

  return (
    <div className="flex w-full flex-row items-center justify-start py-0  px-5 bg-slate-700">
      <span
        className="flex items-center hover:cursor-pointer"
        onClick={navigateToHome}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          alt="icono de la app"
          width={60}
          height={60}
        />
        <Text className="text-white" h2>
          P
        </Text>
        <Text className="text-white" h3>
          okemon
        </Text>
      </span>
      <Spacer css={{ flex: 1 }} />
      <Text
        className="text-white hover:cursor-pointer"
        onClick={navigateToFavorites}
      >
        Favoritos
      </Text>
    </div>
  );
};
