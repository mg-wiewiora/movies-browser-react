import { TileContainer, TileContent, TilePeople, TileTitle, TileWrapper } from "./styled"


const Tiles = ({ people, title, content }) => {
    <TileWrapper>
        <TilePeople src={people} />
        <TileContainer>
            <TileTitle>{title}</TileTitle>
        <TileContent>{content}</TileContent>
        </TileContainer>
    </TileWrapper>
}

export default Tiles;