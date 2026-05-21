
const levels = [
    { answer: 'bound 2', video: 'Ye.mp4' },
    { answer: 'cant tell me nothing', video: 'heartless.mp4' },
    { answer: 'heartless', video: 'kanye.mp4' } 
];


function check(event) {
    event.preventDefault();
    let score = document.getElementById('score');
    let level = document.getElementById('level'); 
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer');
    const currentLevel = Number
(level.value) - 1;

    if (currentLevel < levels.length && inputValue == levels[currentLevel].answer) {
        alert("Answer correct");
        score.value = Number(score.value) + 1;
        level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].video) {
            video.children[0].src = levels[currentLevel].video;
            video.load();
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("Answer incorrect or wrong level!");
    }

    return false;
}
