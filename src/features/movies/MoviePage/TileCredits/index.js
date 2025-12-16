import {
    TileCreditsWrapper,
    TileCreditsImage,
    TileCreditsContainer,
    TileCreditsJob,
    TileCreditsName,
} from "./styled.js";
import noPoster from "../../../../assets/no-picture.svg";
import { getPosterUrl } from "../../moviesData.js";

const TileCredits = ({ actor, crew }) => {

    const castPosterUrl = getPosterUrl(actor?.profile_path || crew?.profile_path);
    const personPath = `/person/${actor?.id || crew?.id}`

    return (
        <TileCreditsWrapper to={personPath}>
            <TileCreditsContainer>
                <TileCreditsImage $posterUrl={castPosterUrl} $noPosterUrl={noPoster} />
                <TileCreditsName>{actor?.name}{crew?.name}</TileCreditsName>
                <TileCreditsJob>{actor?.character}{crew?.job}</TileCreditsJob>
            </TileCreditsContainer>
        </TileCreditsWrapper>
    )
};

export default TileCredits;