import {
    CreditsTileWrapper,
    CreditsTileImage,
    CreditsTileContainer,
    CreditsTileJob,
    CreditsTileName,
} from "./styled.js";
import noPoster from "../../../../assets/no-picture.svg";
import { getPosterUrl } from "../../moviesData.js";

const CreditsTile = ({ actor, crew }) => {

    const castPosterUrl = getPosterUrl(actor?.profile_path || crew?.profile_path);
    const personPath = `/person/${actor?.id || crew?.id}`

    return (
        <CreditsTileWrapper to={personPath}>
            <CreditsTileContainer>
                <CreditsTileImage $posterUrl={castPosterUrl} $noPosterUrl={noPoster} />
                <CreditsTileName>{actor?.name}{crew?.name}</CreditsTileName>
                <CreditsTileJob>{actor?.character}{crew?.job}</CreditsTileJob>
            </CreditsTileContainer>
        </CreditsTileWrapper>
    )
};

export default CreditsTile;