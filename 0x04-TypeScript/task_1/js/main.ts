interface Teacher {
    firstname: string,
    lastName: string,
    location: string,
    fullTimeEmployee: true | false,
    yearsOfExperience?: number,
    contract?: any
}
interface Directors extends Teacher {
    numberOfReports: number,
}

const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;
                                                          
interface user {
    firstName: string,
    lastName: string
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName,
        this.lastName = lastName
    }

    workOnHomework() {
        console.log("Currently working")
        return ("Currently working")
    }

    displayName() {
        console.log(this.firstName)
        return this.firstName;
    }
}
