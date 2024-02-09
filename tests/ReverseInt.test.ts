import reverseInt from "../src/ReverseInt";

test("reverse int 9000 should equal 9", () => {
    const reversed = reverseInt(9000);
    expect(reversed).toEqual(9);
});

test("reverse int -1002 should equal -2001", () => {
    const reversed = reverseInt(-1002);
    expect(reversed).toEqual(-2001);
});

test("reverse int -999000 should equal -999", () => {
    const reversed = reverseInt(-999000);
    expect(reversed).toEqual(-999);
});

test("reverse int 800003 should equal 300008", () => {
    const reversed = reverseInt(800003);
    expect(reversed).toEqual(300008);
});
