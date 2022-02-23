class Employee {
    constructor(name, salary, designation) {
        this.name = name;
        this.salary = salary;
        this.designation = designation;
    }
    taxOnSalary(tax) {
        var taxOnSalary = this.salary * tax / 100;
        console.log('The Tax on Salary is: ' + taxOnSalary);
    }
    display() {
        console.log('Here are the details of Employee:');
        console.log('Name: '+'{'+this.name+'}\t'+'\t'+'Salary: '+'{'+this.salary+'}'+'\t\t'+'Designation: '+'{'+this.designation+'}');
    }
}

var AP = new Employee('Zulkifal', 75000, 'Student');
AP.taxOnSalary(20);
var lecturer = new Employee('Talha', 50000, 'Student');
lecturer.taxOnSalary(10);


AP.display();
lecturer.display();