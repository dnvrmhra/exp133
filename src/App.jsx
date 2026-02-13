import "./App.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }

  getRole() {
    return "Person";
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }

  getRole() {
    return "Student";
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }

  getRole() {
    return "Teacher";
  }
}

function App() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics"),
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} className="card">
          <h2>
            {person.name} ({person.getRole()})
          </h2>

          <p className="age">Age: {person.age}</p>

          <p className="intro">{person.introduce()}</p>

          {person instanceof Student && (
            <p>
              <b>Major:</b> {person.major}
            </p>
          )}

          {person instanceof Teacher && (
            <p>
              <b>Teaching:</b> {person.subject}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;