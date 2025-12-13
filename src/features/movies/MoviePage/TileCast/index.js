import {
    TileWrapper,
    TileImage,
    TileContainer,
    TileCharacter,
    TileActor,
} from "./styled";
import noPoster from "../../../../assets/Picture.svg";
import { getPosterUrl } from "../../moviesData.js";

const TileCast = ({ actor }) => {

    const posterUrl = getPosterUrl(actor.profile_path);

    return (
        <TileWrapper>
            <TileContainer>
                <TileImage $posterUrl={posterUrl} $noPosterUrl={noPoster} />
                <TileActor>{actor.name}</TileActor>
                <TileCharacter>{actor.character}</TileCharacter>
            </TileContainer>
        </TileWrapper>
    )
};

export default TileCast;