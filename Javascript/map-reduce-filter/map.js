//Simple Map to handle Iteration, index and array 

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

console.log('Details of Students before update');
console.log(' S.No || Id  ||  Name  ||  Dept  || Score ||  Index   ');
const studentList = students.map((student, index) => {
  console.log(`  ${index+1}     ${student.id}    ${student.name}        ${student.dept}          ${student.score} `);
    student.score +=5;
    return student;
});
console.log('Details of Students After update');
console.log(' S.No. ||  Id  ||  Name  ||  Dept  || Score  ');
 studentList.map((student, index) => {
    console.log(`  ${index+1}      ${student.id}    ${student.name}        ${student.dept}          ${student.score} `);
  });

