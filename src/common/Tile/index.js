import {
      TileWrapper,
      TileImage,
      TileContainer,
      TileTitle,
      TileYear,
      TileTags,
      TileTag,
      TileContent
} from "./styled";
import poster from "../../images/image.jpg"

const Tile = ({ title, content, tag1, tag2 }) => (
  <TileWrapper>
    <TileImage src={poster} />
    <TileContainer>
      <TileTitle>{title}</TileTitle>
      <TileYear>2009</TileYear>
      <TileTags>
        <TileTag>{tag1}</TileTag>
        <TileTag>{tag2}</TileTag>
      </TileTags>
      <TileContent>{content}</TileContent>
    </TileContainer>
  </TileWrapper>
);

export default Tile;