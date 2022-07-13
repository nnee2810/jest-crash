const object = require("./src/object")

test("object equal", () => {
  expect(object()).toEqual({
    name: "steve-1",
  })
})
