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

const Tile = ({ image, title, year, tag1, tag2, content, }) => (
  <TileWrapper>
    <TileImage src={image} />
    <TileContainer>
      <TileTitle>{title}</TileTitle>
      <TileYear>{year}</TileYear>
      <TileTags>
        <TileTag>{tag1}</TileTag>
        <TileTag>{tag2}</TileTag>
      </TileTags>
      <TileContent>{content}</TileContent>
    </TileContainer>
  </TileWrapper>
);

export default Tile;