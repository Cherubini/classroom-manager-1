class ClassRoom{

    constructor(students = []){
        this.students = students;
    }

    addStudent(student){
        this.students.push(student);

    }

    removeStudent(student){
        this.students = this.students.filter(n =>n!=student)


    }

    shuffleStudents(){
        shuffleArray(this.students);       
    }


    shuffleArray(array) {
        for (var i = (array.length - 1); i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}