import maxChar from "../src/MaxChar";

test("String 'nhrrakjaaiuuha' should return 'a'", () => {
    const str = "nhrrakjaaiuuha";
    const max = maxChar(str);
    expect(max).toEqual("a");
});
