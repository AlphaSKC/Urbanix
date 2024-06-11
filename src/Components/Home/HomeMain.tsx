import { Container } from "@mui/material";
import SliderMain from "../Home/SliderMain";
import SuscribeForm from "./SuscribeForm";
import UniqueSneakers from "./UniqueSneakers";
import LatestReleases from "./LatestReleases";

export default function HomeMain() {
    return (
        <Container>
            <SliderMain></SliderMain>
            <UniqueSneakers/>
            <LatestReleases />
            <SuscribeForm />
        </Container>
    );
}