import TraitType from "../types/trait";

class Trait implements TraitType {
  name: string;
  values: TraitType[];
  probabilities: string[];
  value;
  rarity;
  Component;

  constructor(name: string, values: TraitType[]) {
    this.name = name;
    this.values = values;
    this.probabilities = this.values
      .map((v) => Array(v.rarity).fill(v.value))
      .flat();
    const index = Math.floor(Math.random() * this.probabilities.length);
    this.value = this.probabilities[index];
    this.Component = this.values.find((v) => v.value === this.value)?.Component;
    this.rarity = this.values.find((v) => v.value === this.value)?.rarity;
  }
}

export default Trait;
