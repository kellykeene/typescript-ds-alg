import fizzBuzz from "../src/FizzBuzz";

test("fizzBuzz function is defined", () => {
    expect(fizzBuzz).toBeDefined();
});

test("Calling fizzbuzz with `5` prints out 5 statements", () => {
    fizzBuzz(5);

    expect(console.log.length).toEqual(5);
});

test("Calling fizzbuzz with 15 prints out the correct values", () => {
    fizzBuzz(15);

    const logSpy = jest.spyOn(console, "log");

    expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith(2);
    expect(logSpy).toHaveBeenCalledWith("fizz");
    expect(logSpy).toHaveBeenCalledWith(4);
    expect(logSpy).toHaveBeenCalledWith("buzz");
    expect(logSpy).toHaveBeenCalledWith("fizz");
    expect(logSpy).toHaveBeenCalledWith(7);
    expect(logSpy).toHaveBeenCalledWith(8);
    expect(logSpy).toHaveBeenCalledWith("fizz");
    expect(logSpy).toHaveBeenCalledWith("buzz");
    expect(logSpy).toHaveBeenCalledWith(11);
    expect(logSpy).toHaveBeenCalledWith("fizz");
    expect(logSpy).toHaveBeenCalledWith(13);
    expect(logSpy).toHaveBeenCalledWith(14);
    expect(logSpy).toHaveBeenCalledWith("fizzbuzz");
});
