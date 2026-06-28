import {sum} from "../sum";

test ("Sum function should calculate the total of two numbers", () => {
    const result = sum(3,5);
    expect(result).toBe(8);
});