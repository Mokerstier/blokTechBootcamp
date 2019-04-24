class Vec {
    constructor( x, y){
        this.x = x;
        this.y = y;
        //this.length = Math.sqrt((x * x) +(y * y));
    }
    plus(vector){
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Vec(x, y);
    }
    minus(vector){
        let x = this.x - vector.x;
        let y = this.y - vector.y;
        return new Vec(x, y);
    }
    get length(){
       return Math.sqrt((this.x * this.x) +(this.y * this.y));
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));

console.log(new Vec(1, 2).minus(new Vec(2, 3)));

console.log(new Vec(3, 4).length);