  import {
   TileWrapper,
   TilePeople,
   TileContainer,
   TileTitle,

} from "./styled";
 import noPoster from "../../../../assets/no-poster.svg";
 import { getPosterUrl } from "../peopleData";

 
 const Tile = ({ person }) => {
const posterUrl = getPosterUrl(person.profile_path);
 
   return (
     <TileWrapper>
       <TilePeople $posterUrl={posterUrl} $noPosterUrl={noPoster} />
       <TileContainer>
         <TileTitle>{person.name}</TileTitle>
      </TileContainer>
     </TileWrapper>
   );
 };

export default Tile;