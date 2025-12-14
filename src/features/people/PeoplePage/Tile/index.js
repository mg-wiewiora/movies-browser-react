  import {
   TileWrapper,
   TilePeople,
   TileContainer,
   TileTitle,

} from "./styled";
 import noPoster from "../../../../assets/no-poster.svg";
 import { getPosterUrl } from "../peopleData";

 
 const Tile = ({ people }) => {
const posterUrl = getPosterUrl(people.poster_path);
 
   return (
     <TileWrapper>
       <TilePeople $posterUrl={posterUrl} $noPosterUrl={noPoster} />
       <TileContainer>
         <TileTitle>{people.title}</TileTitle>
      </TileContainer>
     </TileWrapper>
   );
 };

export default Tile;