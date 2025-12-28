import {
  TileWrapper,
  TilePeople,
  TileContainer,
  TileTitle,

} from "./styled";
import noPicture from "../../../../assets/no-picture.svg";
import { getPosterUrl } from "../peopleData";

const Tile = ({ person }) => {
  const posterUrl = getPosterUrl(person.profile_path);
  const personPath = `/person/${person?.id}`

  return (
    <TileWrapper to={personPath}>
      <TilePeople $posterUrl={posterUrl} $noPosterUrl={noPicture} />
      <TileContainer>
        <TileTitle>{person.name}</TileTitle>
      </TileContainer>
    </TileWrapper>
  );
};

export default Tile;