export class TriangleClassifier{
    a: number;
    b : number;
    c : number;
    constructor(a : number,
                b : number,
                c : number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    Classificationoftriangles(): string | undefined{
        let condition = this.a>0 && this.b > 0 && this.c > 0;
        let threeequalsides = (this.a == this.b && this.b == this.c);
        let twoequalsides = (this.a == this.b || this.b == this.c || this.a == this.c )


        if (condition ){
            if ((this.a + this.b) > this.c && (this.a+ this.c)> this.b){
                if (threeequalsides){
                    return 'equilateral triangle';
                }

                return 'is triangle';
            }
        } else {
            return 'not a triangle';
        }
    }

}
