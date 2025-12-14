import {
    TileWrapper,
    TileImage,
    TileContainer,
    TileCrewJob,
    TileCrewName,
} from "./styled";
import noPoster from "../../../../assets/Picture.svg";
import { getPosterUrl } from "../../moviesData.js";

const TileCrew = ({ crew }) => {

    const posterUrl = getPosterUrl(crew.profile_path);

    return (
        <TileWrapper>
            <TileContainer>
                <TileImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
                <TileCrewName>{crew.name}</TileCrewName>
                <TileCrewJob>{crew.job}</TileCrewJob>
            </TileContainer>
        </TileWrapper>
    )
};

export default TileCrew;