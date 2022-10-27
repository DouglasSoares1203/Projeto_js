//classes

/*
  data modifiers
  public
  private
  protected
*/

class Character {
    protected name: string;
    readonly streght: number;
    skill: number;

    constructor(name: string, streght: number, skill: number){
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.streght} points`);
    }
}

//Character: superclass
//Magician: subclass

class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints: number
        ) {
            super(name, stregth, skill);
            this.magicPoints = magicPoints;
        }
    }

const p1 = new  Character("Ryu",10,98);
const p2 = new  Magician("Mago",09,30,100);
p1.skill = 12;
