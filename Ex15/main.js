const Students = [
    {
        name: "Muna",
        age: 20,
        grade: "A",
        class: "CA233"
    },
    {
        name: "Hodan",
        age: 22,   
        grade: "B+",
        class: "CA233"     
    }, 
    {
        name: "Mariam",
        age: 21,      
        grade: "A+",
        class: "CA233"  
    },
    {
        name: "Juu",
        age: 23,      
        grade: "C+",
        class: "CA222"
    }, 
    {
        name: "Hamda",
        age: 19,
        grade: "B+",
        class: "CA222"
    }
]
console.log("properties and values of each student ");
for(let student of Students){
    for(let key in student){
        console.log(key + ": " + student[key]);
    }   
}