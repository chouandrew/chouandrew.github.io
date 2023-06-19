let currentQuestion = 1;

const questions = [
    {
        text: "Some of the university students choose to live on-campus, like in the students’ dorm, while some students choose to rent an apartment off-campus. Which one do you prefer and why?",
        prepTime: 15,
        responseTime: 45,
    },
    {
        text: "The woman expresses her opinion about the proposal that her friend Tim made in his letter to the newspaper. State her opinion about his proposal and explain the reason she gives for her opinion.",
        prepTime: 30,
        responseTime: 60,
    },
    {
        text: "Using the professor’s examples, explain the advertising technique of target marketing.",
        prepTime: 30,
        responseTime: 60,
    },
    {
        text: "Using points and examples from the talk, explain active attention and passive attention.",
        prepTime: 20,
        responseTime: 60,
    }
];

let readingTimerInterval = null;
function resetQuestionEnvironment() {
    // Stop all audio
    const audioElements = document.getElementsByTagName("audio");

    // Iterate through each audio element to pause and reset
    for (let audio of audioElements) {
        audio.pause();
        audio.currentTime = 0;
    }

    // Clear intervals
    clearInterval(prepTimerInterval);
    clearInterval(responseTimerInterval);
    clearInterval(readingTimerInterval);

    // Reset timers
    window.speechSynthesis.cancel(); // Stop speech synthesis

    let prepTime = questions[currentQuestion - 1].prepTime;
    let responseTime = questions[currentQuestion - 1].responseTime;

    prepTimer.innerText = `PREPARATION TIME: ${prepTime} seconds`;
    responseTimer.innerText = `RESPONSE TIME: ${responseTime} seconds`;
}

function resetTextImage() {
    // Hide text and question images
    const textElements = document.getElementsByTagName("p");
    const h3Elements = document.getElementsByTagName("h3");
    const QimgElements = document.getElementsByClassName("question-image");
    for (let text of textElements) {
        text.style.display = "none";
    }
    for (let Qimg of QimgElements) {
        Qimg.style.display = "none";
    }
    for (let h3 of h3Elements) {
        h3.style.display = "none";
    }
}
function startQ1() {
    // Hide instructions timers and question-text
    document.getElementById("instructions").style.display = "none";
    //document.getElementById("timers").style.display = "none";
    //document.getElementById("question-text").style.display = "none";
    document.getElementById("question-title").innerText = "Question 1 of 4";
    resetTextImage();

    // Show image
    const imageListening = document.getElementById("image-listening");
    document.getElementById("question-template").style.display = "block";
    imageListening.style.display = "block";

    // Play audio
    const instructionAudioQ1 = document.getElementById("instruction-audio-q1");
    instructionAudioQ1.play();

    // When audio finishes, hide image and load question
    instructionAudioQ1.onended = function() {
        imageListening.style.display = "none";
        loadQuestion(currentQuestion);
        document.getElementById("next-btn").disabled = currentQuestion >= questions.length;
    };
}


function startQ2() {
    const imageDorm = document.getElementById("image-dorm");
    const instructionAudioQ2 = document.getElementById("instruction-audio-q2");
    const readingTimer = document.getElementById("reading-timer");
    const timer = document.getElementById("timer");
    const readingQ2 = document.getElementById("reading-q2");
    const readingTextQ2 = document.getElementById("reading-text-q2");
    const readinghQ2 = document.getElementById("reading-h-q2");
    const beginReadingAudioQ2 = document.getElementById("begin-reading-q2");
    const imageConversation = document.getElementById("image-conversation");
    const taskAudio2 = document.getElementById("task-audio-2");
    document.getElementById("question-title").innerText = "Question 2 of 4";

    // Step 1: Hide and Show 
    resetQuestionEnvironment();
    resetTextImage();
    imageDorm.style.display = "block";
    instructionAudioQ2.play();
    // document.getElementsByTagName("p")[0].style.display = "block";

    // Step 2: When audio finishes, hide #image-listening and show #reading-timer and #reading-text-q2, play audio #begin-reading-q2
    instructionAudioQ2.onended = function() {
        imageDorm.style.display = "none";
        timer.style.display = "block";
        readingTimer.style.display = "block";
        readingTimer.innerText = 'Reading time: 45 seconds';
        readingQ2.style.display = "block";
        readinghQ2.style.display = "block";
        readingTextQ2.style.display = "block";
        beginReadingAudioQ2.play();

        // Step 3: When audio finishes, start reading-timer
        beginReadingAudioQ2.onended = function() {
            startReadingTimer(45, function() {

                // Step 4: Hide reading-timer and reading-text, show #image-conversation, play #task-audio-2
                readingTimer.style.display = "none";
                readingQ2.style.display = "none";
                document.getElementById("beep-audio").play();
                imageConversation.style.display = "block";
                taskAudio2.play();

                // When the audio finishes, hide the image and load the question
                taskAudio2.onended = function() {
                    imageConversation.style.display = "none";
                    loadQuestion(currentQuestion);
                };
            });
        };
    };
}


function startQ3() {
    const imageListening = document.getElementById("image-listening");
    const instructionAudioQ3 = document.getElementById("instruction-audio-q3");
    const readingTimer = document.getElementById("reading-timer");
    const timer = document.getElementById("timer");
    const readingQ3 = document.getElementById("reading-q3");
    const readingTextQ3 = document.getElementById("reading-text-q3");
    const readinghQ3 = document.getElementById("reading-h-q3");
    const beginReadingAudioQ3 = document.getElementById("begin-reading-q3");
    const imageLecture = document.getElementById("image-lecture");
    const taskAudio3 = document.getElementById("task-audio-3");
    document.getElementById("question-title").innerText = "Question 3 of 4";

    // Step 1: Hide and Show 
    resetQuestionEnvironment();
    resetTextImage();
    imageListening.style.display = "block";
    // document.getElementsByTagName("p")[0].style.display = "block";
    instructionAudioQ3.play();

    // Step 2: When audio finishes, hide #image-listening and show #reading-timer and #reading-text-q2, play audio #begin-reading-q2
    instructionAudioQ3.onended = function() {
        imageListening.style.display = "none";
        timer.style.display = "block";
        readingTimer.style.display = "block";
        readingTimer.innerText = 'Reading time: 45 seconds';
        readingQ3.style.display = "block";
        readinghQ3.style.display = "block";
        readingTextQ3.style.display = "block";
        beginReadingAudioQ3.play();

        // Step 3: When audio finishes, start reading-timer
        beginReadingAudioQ3.onended = function() {
            startReadingTimer(45, function() {

                // Step 4: Hide reading-timer and reading-text, show #image-conversation, play #task-audio-2
                readingTimer.style.display = "none";
                readingQ3.style.display = "none";
                document.getElementById("beep-audio").play();
                imageLecture.style.display = "block";
                taskAudio3.play();

                // When the audio finishes, hide the image and load the question
                taskAudio3.onended = function() {
                    imageLecture.style.display = "none";
                    loadQuestion(currentQuestion);
                };
            });
        };
    };
}

function startQ4() {
    document.getElementById("question-title").innerText = "Question 4 of 4";
    
    const imageListening = document.getElementById("image-listening");
    const imageLecture = document.getElementById("image-lecture2");
    const instructionAudioQ4 = document.getElementById("instruction-audio-q4");

    // Show listening image and play instruction audio
    resetTextImage();
    imageListening.style.display = "block";
    instructionAudioQ4.play();

    instructionAudioQ4.onended = function() {
        // Hide listening image, show lecture image, and play lecture audio
        imageListening.style.display = "none";
        imageLecture.style.display = "block";

        const taskAudio4 = document.getElementById("task-audio-4");
        taskAudio4.play();

        taskAudio4.onended = function() {
            // Hide lecture image and continue with loading the question
            imageLecture.style.display = "none";
            loadQuestion(currentQuestion);
        }
    }
}


function loadNextQuestion() {
    resetQuestionEnvironment();
    currentQuestion++;
    switch (currentQuestion) {
        case 1:
            startQ1();
            break;
        case 2:
            startQ2();
            break;
        case 3:
            startQ3();
            break;
        case 4:
            startQ4();
            break;
        default:
            // Handle case when currentQuestion is out of range
            console.error("Question index out of range");
            break;
    };
    document.getElementById("back-btn").disabled = currentQuestion <= 1;
    document.getElementById("next-btn").disabled = currentQuestion >= questions.length;
}

function loadPreviousQuestion() {
    resetQuestionEnvironment();
    currentQuestion--;
    switch (currentQuestion) {
        case 1:
            startQ1();
            break;
        case 2:
            startQ2();
            break;
        case 3:
            startQ3();
            break;
        case 4:
            startQ4();
            break;
        default:
            // Handle case when currentQuestion is out of range
            console.error("Question index out of range");
            break;
    }
    document.getElementById("back-btn").disabled = currentQuestion <= 1;
    document.getElementById("next-btn").disabled = currentQuestion >= questions.length;
}

const speakingPrepareAudio = document.getElementById("speaking-prepare-audio");
const speakingSpeakAudio = document.getElementById("speaking-speak-audio");
const prepTimer = document.getElementById("prep-timer");
const responseTimer = document.getElementById("response-timer");

function loadQuestion(index) {
    const questionData = questions[index - 1];
    const questionTemplate = document.getElementById("question-template");
    questionTemplate.style.display = "block";

    // Set Question properties
    document.getElementById("question-text").innerText = questionData.text;

    let prepTime = questionData.prepTime;
    let responseTime = questionData.responseTime;

    // Display question text
    const questionText = document.getElementById("question-text");
    questionText.style.display = "block";

    // Display timers
    let PrepTimeLeft = prepTime;
    let ResponseTimeLeft = responseTime;
    document.getElementById("question-template").style.display = "block";

    prepTimer.innerText = `PREPARATION TIME: ${PrepTimeLeft} seconds`;
    responseTimer.innerText = `RESPONSE TIME: ${ResponseTimeLeft} seconds`;
    document.getElementById("timers").style.display = "block";
    document.getElementById("prep-timer").style.display = "block";
    document.getElementById("response-timer").style.display = "block";

    // Utter question with browser
    const utterance = new SpeechSynthesisUtterance(questionText.innerText);
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);


    // Define subsequent actions
    utterance.onend = function () {
        speakingPrepareAudio.play();
        speakingPrepareAudio.onended = function () {
            document.getElementById("beep-audio").play();
            startPreparationTimer(PrepTimeLeft, ResponseTimeLeft);
        };
    }
}

let prepTimerInterval = null;
let responseTimerInterval = null;

function startPreparationTimer(PrepTimeLeft, ResponseTimeLeft) {
    clearInterval(prepTimerInterval); // Clear previous interval if exists
    prepTimerInterval = setInterval(function () {
        prepTimer.innerText = `PREPARATION TIME: ${PrepTimeLeft} seconds`;
        PrepTimeLeft -= 1;
        if (PrepTimeLeft < 0) {
            clearInterval(prepTimerInterval);
            speakingSpeakAudio.play();
            speakingSpeakAudio.onended = function () {
                document.getElementById("beep-audio").play();
                startResponseTimer(ResponseTimeLeft);
            };
        }
    }, 1000);
}

function startResponseTimer(ResponseTimeLeft) {
    clearInterval(responseTimerInterval); // Clear previous interval if exists
    responseTimerInterval = setInterval(function () {
        responseTimer.innerText = `RESPONSE TIME: ${ResponseTimeLeft} seconds`;
        ResponseTimeLeft -= 1;
        if (ResponseTimeLeft < 0) {
            clearInterval(responseTimerInterval);
            document.getElementById("beep-audio").play();
        }
    }, 1000);
}

function startReadingTimer(seconds, callback) {
    clearInterval(readingTimerInterval);

    let timeLeft = seconds;
    const readingTimer = document.getElementById("reading-timer");

    readingTimerInterval = setInterval(function() {
        readingTimer.innerText = `Reading time: ${timeLeft} seconds`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(readingTimerInterval);
            callback();
        }
    }, 1000);
}