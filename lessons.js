import { calculateDurationSum } from "./calculator.js"

const lesson1 = {
    name: 'Modern JavaScript és webfejlesztés alapok ismétlése',
    duration: 75,
    isCompleted: false
}

const lesson2 = {
    name: 'Modern JavaScript gyakorlás',
    duration: 90,
    isCompleted: false
}

const lesson3 = {
    name: 'HTTP és aszinkronitás',
    duration: 88,
    isCompleted: false
}

const lesson4 = {
    name: 'HTTP és aszinkronitás gyakorlás',
    duration: 93,
    isCompleted: false
}

const lesson5 = {
    name: 'Haladó CSS (FlexBox és Grid)',
    duration: 80,
    isCompleted: false
}

const lesson6 = {
    name: 'WebComponents',
    duration: 76,
    isCompleted: false
}

const lessonBaseName = 'Időjárás alkalmazás';

const lesson7 = {
    name: `${lessonBaseName} 1.`,
    duration: 70,
    isCompleted: false
}

const lesson8 = {
    name: `${lessonBaseName} 2.`,
    duration: 84,
    isCompleted: false
}

lesson8.isCompleted = true;

const lessons = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8
];

export const initLessons = () => {
    const container = document.querySelector('#lessons');
    lessons.forEach(lesson => {
        container.innerHTML = container.innerHTML + `
            <div class="lesson"> 
                <input ${lesson.isCompleted ? 'checked' : ''} type="checkbox">
                ${lesson.name} - ${lesson.duration}perc
            </div>
        `;
    });

    document.querySelector('#save-button').addEventListener('click', () => {
        document.querySelectorAll('input').forEach((input, index) => {
            lessons[index].isCompleted = input.checked;
        })
        lessons.forEach(l => console.log(l));
    });

    document.querySelector('#duration-sum').textContent = `${calculateDurationSum(lessons.map(l => l.duration))}perc`;
}