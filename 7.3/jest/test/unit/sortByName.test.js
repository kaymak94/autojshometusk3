const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});
describe("Books names negative test", () => {
  it("Books names shouldn't sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Идиот",
        "Преступление и наказание",
        "Братья Карамазовы",
        "Преступление и наказание",
      ])
    ).toEqual([
      "Братья Карамазовы",
      "Идиот",
      "Преступление и наказание",
      "Преступление и наказание",
    ]);
  });
});
