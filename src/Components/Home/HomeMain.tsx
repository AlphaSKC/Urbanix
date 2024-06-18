import { Container } from "@mui/material";
import SliderMain from "../Home/SliderMain";
import SuscribeForm from "./SuscribeForm";
import UniqueSneakers from "./UniqueSneakers";
import LatestReleases from "./LatestReleases";
import Categories from "./Categories";

export default function HomeMain() {
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
