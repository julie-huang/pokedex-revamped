import {
  checkPokemonNameMatch,
  checkPokemonTypeMatch,
  filterPokemonListByNameAndType,
} from ".";

const TEST_POKEMON = {
  id: 1,
  name: {
    english: "Bulbasaur",
    japanese: "フシギダネ",
    chinese: "妙蛙种子",
    french: "Bulbizarre",
  },
  type: ["Grass", "Poison"],
  base: {
    HP: 45,
    Attack: 49,
    Defense: 49,
    "Sp. Attack": 65,
    "Sp. Defense": 65,
    Speed: 45,
  },
};

const TEST_POKEDEX = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 60,
    },
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
  },
];

describe("checkPokemonNameMatch", () => {
  it("should false if the name does not match", () => {
    const result = checkPokemonNameMatch(TEST_POKEMON, "pikachu");
    expect(result).toBeFalsy();
  });
  it("should returns true if the name matches", () => {
    const result = checkPokemonNameMatch(TEST_POKEMON, "bulbasaur");
    expect(result).toBeTruthy();
  });
});

describe("checkPokemonTypeMatch", () => {
  it("should return true if the pokemon has has all of the types", () => {
    const result = checkPokemonTypeMatch(TEST_POKEMON, ["Grass", "Poison"]);
    expect(result).toBeTruthy();
  });
  it("should return false if the pokemon only has a subset of given types", () => {
    const result = checkPokemonTypeMatch(TEST_POKEMON, ["Grass", "Fire"]);
    expect(result).toBeFalsy();
  });
  it("should return false if none of the types match the pokemon", () => {
    const result = checkPokemonTypeMatch(TEST_POKEMON, ["Fire", "Fighting"]);
    expect(result).toBeFalsy();
  });
});

describe("filterPokemonListByNameAndType", () => {
  it("should return an empty array if the name and type do not match any pokemon in the pokedex", () => {
    const result = filterPokemonListByNameAndType(TEST_POKEDEX, "pikachu", [
      "Fire",
      "Fighting",
    ]);
    expect(result).toEqual([]);
  });
  it("should return an array with pokemon that match name and type", () => {
    const result = filterPokemonListByNameAndType(TEST_POKEDEX, "bulbasaur", [
      "Grass",
    ]);
    expect(result).toEqual([TEST_POKEMON]);
  });
  it("should return an empty array when name matches but types do not", () => {
    const result = filterPokemonListByNameAndType(TEST_POKEDEX, "bulbasaur", [
      "Grass",
      "Fighting",
    ]);
    expect(result).toEqual([]);
  });
  it("should return an empty array when types match but names do not", () => {
    const result = filterPokemonListByNameAndType(TEST_POKEDEX, "pikachu", [
      "Electric",
    ]);
    expect(result).toEqual([]);
  });
});
