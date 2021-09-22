import Nft from "./NFT";
import { Color, FaceColor, Mouth, Size } from "./TraitClass";

class Robot extends Nft {
  constructor() {
    super("Robot", [Color, Size, Mouth, FaceColor]);
  }
}

export default Robot;
