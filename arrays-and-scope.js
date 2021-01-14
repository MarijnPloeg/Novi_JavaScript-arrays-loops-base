
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// --------------------------
// Opdracht 1: Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// verwacht antwoord: 6
// --------------------------

let aantalStudentenCumLaude = 0;

for (const grade of grades) {
    if (grade >= 8){
        aantalStudentenCumLaude++;
    }
}

console.log('Het aantal cum laude studenten is: ' + aantalStudentenCumLaude)

// --------------------------
// Opdracht 2: Check welke waarde in de array het hoogste is, en log dit in de console
// verwacht antwoord: 9
// --------------------------

console.log(Math.max.apply(null, grades));

// --------------------------
// Opdracht 3: Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// verwacht antwoord: 6.642857142857143
// --------------------------

let totalNumberOfGrades = 0;

for (const grade of grades) {
    totalNumberOfGrades = totalNumberOfGrades + grade;
}

let averageGrade =  totalNumberOfGrades / grades.length;

console.log('Het gemiddelde cijfer is: ' + averageGrade)





