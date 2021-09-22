import colors from "../traits/colors";
import faceColors from "../traits/faceColor";
import mouthes from "../traits/mouthes";
import sizes from "../traits/sizes";
import Trait from "./Trait";

export class Color extends Trait {
  constructor() {
    super("color", colors);
  }
}

export class FaceColor extends Trait {
  constructor() {
    super("faceColor", faceColors);
  }
}

export class Size extends Trait {
  constructor() {
    super("size", sizes);
  }
}

export class Mouth extends Trait {
  constructor() {
    super("mouth", mouthes);
  }
}
