import Link from "next/link";
import { useContext, useState } from "react";
import CartContext from "../../lib/context/Cart";
import { Box, Text, Image, Divider } from "@chakra-ui/react";

export default function ProductCard(props) {
  return (
    <Link href={`product/${props.slug}`} passHref>
      <Box
        as="a"
        border="1px"
        borderColor="gray.200"
        px="10"
        py="5"
        rounded="lg"
        boxShadow="lg"
        bgColor="white"
        transition="eases 0.2s"
        _hover={{ boxShadow: "xl", transform: "scale(1.02" }}
      >
        <Image src={props.images[0]?.url} alt={props.name} />
        <Divider my="2" />
        <Box>
          <Text fontWeight="bold" textColor="purple" fontSize="lg">
            {props.name}
          </Text>
          <Text textColor="gray.700">£{props.price / 100}</Text>
        </Box>
      </Box>
    </Link>
  );
}
