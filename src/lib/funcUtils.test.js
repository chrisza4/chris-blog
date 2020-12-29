const FuncUtils = require("./funcUtils")

describe("keyBy", () => {
  it("Change array of objects to object with key", () => {
    const input = [
      { title: "Chris", id: "aaa" },
      { title: "Chris2", id: "bbb" },
    ]
    const expected = {
      aaa: { title: "Chris", id: "aaa" },
      bbb: { title: "Chris2", id: "bbb" },
    }
    const actual = FuncUtils.keyBy(input, obj => obj.id)
    expect(expected).toEqual(actual)
  })
})
