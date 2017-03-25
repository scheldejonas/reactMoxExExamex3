

class PersonFactory {
 
 constructor() {
    this.persons = [];
   }

   getPersons = () => {
     return this.persons;
   }
}

export default new PersonFactory();