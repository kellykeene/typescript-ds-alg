export default function reverseInt(num: number) {
    let reversed = 0;

    let numArr = num.toString().split("");

    reversed = Math.sign(num) * parseInt(numArr.reverse().join(""));

    return reversed;
}
