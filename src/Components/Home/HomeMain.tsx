import { Container } from "@mui/material";
import SliderMain from "./SliderMain";
import SuscribeForm from "./SuscribeForm";
import UniqueSneakers from "./UniqueSneakers";
import LatestReleases from "./LatestReleases";
import Categories from "./Categories";
import type { Guitar } from '../../types'
import Product from "./Product";
import { useCart } from '../../hooks/useCart'

export const db: Guitar[] = [
  {
    id: 1,
    name: 'Lukather',
    image: 'guitarra_01',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 299,
  },
  {
    id: 2,
    name: 'SRV',
    image: 'guitarra_02',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 349,
  },
  {
    id: 3,
    name: 'Borland',
    image: 'guitarra_03',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 329,
  },
  {
    id: 4,
    name: 'VAI',
    image: 'guitarra_04',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 299,
  },
  {
    id: 5,
    name: 'Thompson',
    image: 'guitarra_05',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 399,
  },
  {
    id: 6,
    name: 'White',
    image: 'guitarra_06',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 329,
  },
  {
    id: 7,
    name: 'Cobain',
    image: 'guitarra_07',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 349,
  },
  {
    id: 8,
    name: 'Dale',
    image: 'guitarra_08',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 379,
  },
  {
    id: 9,
    name: 'Krieger',
    image: 'guitarra_09',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 289,
  },
  {
    id: 10,
    name: 'Campbell',
    image: 'guitarra_10',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 349,
  },
  {
    id: 11,
    name: 'Reed',
    image: 'guitarra_11',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 399,
  },
  {
    id: 12,
    name: 'Hazel',
    image: 'guitarra_12',
    description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
    price: 379,
  },
]

export default function HomeMain() {
  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()
  return (
    <Container>
      <SliderMain />
      <Categories />
      <UniqueSneakers />
      <LatestReleases />
      <SuscribeForm />
    </Container>
  );
}
