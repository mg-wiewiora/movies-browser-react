  import {
   TileWrapper,
   TilePeople,
   TileContainer,
   TileTitle,

} from "./styled";
 import noPoster from "../../../../assets/no-poster.svg";
 import { getPosterUrl } from "../peopleData";

 
 const Tile = ({ people }) => {
const posterUrl = getPosterUrl(people.profile_path);
 
   return (
     <TileWrapper>
       <TilePeople $posterUrl={posterUrl} $noPosterUrl={noPoster} />
       <TileContainer>
         <TileTitle>{people.name}</TileTitle>
      </TileContainer>
     </TileWrapper>
   );
 };

export default Tile;