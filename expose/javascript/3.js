let student={
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function(){console.log('Hello');},
    'Favorite Teacher':{
        name : 'Thomas',
        course : 'CSE 110'
    },
    coureload: ['CSE110', 'CSE134']
};

console.log(student.coureload[0]);
student.greeting();