import {
    TileWrapper,
    TileImage,
    TileContainer,
    TileCrewJob,
    TileCrewName,
} from "./styled";
import noPoster from "../../../../assets/Picture.svg";
import { getPosterUrl } from "../../moviesData.js";

const TileCrew = ({ actor }) => {

    const posterUrl = getPosterUrl(actor.profile_path);

    return (
        <TileWrapper>
            <TileContainer>
                <TileImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
                <TileCrewName>{actor.name}</TileCrewName>
                <TileCrewJob>{actor.job}</TileCrewJob>
            </TileContainer>
        </TileWrapper>
    )
};

export default TileCrew;