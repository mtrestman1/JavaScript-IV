// CODE here for your Lambda Classes


//   #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props


class Person {
    constructor(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.location = attributes.location;
  this.gender = attributes.gender;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
  }


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Instructor extends Person {
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}



// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    listsSubjects(fave1, fave2, fave3) {
        return `Favorite subjects are ${fave1}, ${fave2}, and ${fave3}.`
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}



// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
       return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}



// These are the Instructors, Students, and PM's for our example.

const josh = new Instructor({
    name: 'Josh',
    age: 38,
    location: 'Utah?',
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Lets Get Classy'
});

const ryan = new Instructor({
    name: 'Ryan',
    age: 35,
    location: 'internet',
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'react',
    catchPhrase: 'coding is easy!'
});

const max = new Student({
    name: 'Max',
    age: 26,
    location: 'Pittsburgh',
    gender: 'male',
    previousBackground: 'Ran A Medical Transportation Company',
    className: 'Web17',
    favSubjects: ['HTML, CSS, JavaScript']
});

const sara = new Student({
    name: 'Sara',
    age: 35,
    location: 'Boulder',
    gender: 'female',
    previousBackground: 'Doctor',
    className: 'Web16',
    favSubjects: ['HTML, CSS, JavaScript']
});

const john = new ProjectManager({
    name: 'John',
    age: 32,
    location: 'San Francisco',
    gender: 'male',
    gradClassName: 'CS4',
    favInstructor: 'Josh'
});

const meaghan = new ProjectManager({
    name: 'Meaghan',
    age: 29,
    location: 'Miami',
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Ryan'
});

console.log(john.debugsCode(max, 'HTML'));