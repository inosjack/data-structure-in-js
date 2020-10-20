class Student {
      constructor(firstName,lastName,year) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.year = year;
      }
      // Instance Method Or Class method
      fullNumber() {
            return `your full name is ${this.firstName} ${this.lastName}`
      }

      //
      static dec = "simple text";
      static staticMethod() {
            return `${this.dec}`;
      }
}

let student1 = new Student("Jayant","Soni","1992");

console.log(Student.staticMethod());

