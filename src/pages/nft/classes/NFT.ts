import Trait from "./Trait";

class Nft {
  type: string;
  name: string;
  traits: { new (): Trait }[];
  traitValues: Trait[];
  rarity: number;

  static nameIndex = 0;

  constructor(type: string, traits: { new (): Trait }[]) {
    this.type = type;
    this.name = `${type}#${++Nft.nameIndex}`;
    this.traits = traits;
    this.traitValues = [];
    this.traits.forEach((TraitClass) => {
      this.traitValues.push(new TraitClass());
    });
    this.rarity = this.traitValues.reduce((prev, t) => {
      return (prev * (t.rarity || 0)) / 100;
    }, 1);
  }
}

export default Nft;
