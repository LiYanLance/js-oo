import Person from "./person"
import Class from "./class";

class Student extends Person{

    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        return super.introduce() + ` I am a Student. I am at ${this.klass.getDisplayName()}.`
    }
}
export default Student;