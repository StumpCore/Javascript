class Cup {
    constructor(
        name,
        handel,
        volume,
        color,
        material,
        broken
    ){
        this.name = name;
        this.handel = handel;
        this.volume = volume;
        this.color = color;
        this.material = material;
        this.broken = broken;
    }
    //define method
    throwCup(direction){
        this.broken = true;
    }

    changeColor(newColor){
        this.color = newColor;
    }

}

export default Cup;