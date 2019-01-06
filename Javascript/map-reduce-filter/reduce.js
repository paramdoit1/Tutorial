const students = [
    {
        id: 101,
        name: 'Raju',
        dept: 'IT',
        score: 76,
    },
    {
        id: 102,
        name: 'Ravi',
        dept: 'Mech',
        score: 67, 
    },
    {
        id: 103,
        name: 'Ramu',
        dept: 'IT',
        score: 80, 
    },
    {
        id: 104,
        name: 'Raja',
        dept: 'IT',
        score: 74,
    },
];
let total_students_in_IT = students.reduce((sum, student, index)=> {
    if(student.dept === 'IT') {
        return sum +=1; 
    } else {
        return sum;
    }

}, 0);

console.log('Total Student in IT: ', total_students_in_IT);

//Total score of IT students

let IT_Student_Details = students.reduce((details, student, index)=> {
    if(student.dept === 'IT') {
        details.sum += student.score; 
        details.index +=1
        return details;
    } else {
        return details;
    }

}, {sum:0, index:0});

console.log('Average IT score : ', IT_Student_Details.sum/IT_Student_Details.index);

let IT_Student_List = students.reduce((studentList, student) => {
    if(student.dept === 'IT' && student.score>75) {
        studentList.push(student);
        return studentList;
    } else {
        return studentList;
    }
}, []);

console.log(' IT students having 75 and above : ', IT_Student_List);

//combining all colors
const data = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
  ]

  const colors = data.reduce((result, row)=> {
    for(const color of row.c) {
        result.push(color);
    } 
        return result;
}, []);
console.log('colors:', colors);