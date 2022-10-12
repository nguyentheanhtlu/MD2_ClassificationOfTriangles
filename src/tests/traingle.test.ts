import {TriangleClassifier} from "../TriangleClassifier";

describe("TriangleClassifier", () => {
    test("it should filter by a search term (link)", () => {
        let x = new TriangleClassifier(2,2,2);
        expect(x.Classificationoftriangles()).toBe('equilateral triangle');
    });
});
