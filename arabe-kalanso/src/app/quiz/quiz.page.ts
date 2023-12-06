import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  nextButton: any;
  answerButtons: any;
    ngOnInit(): void {
      // const start_btn = document.querySelector(".start-btn button") as HTMLElement;
      // const info_box = document.querySelector(".info-box") as HTMLElement;
      // const exit = document.querySelector(".buttons .quit") as HTMLElement;
      // const restart = document.querySelector(".buttons .restart") as HTMLElement;
      // const quiz_box = document.querySelector(".quiz_box") as HTMLElement;
      // const result_box = document.querySelector(".result_box") as HTMLElement;
      // const option_list = document.querySelector(".option_list") as HTMLElement;
      // const tim_line = document.querySelector("header .tim_line") as HTMLElement;
      // const timeText = document.querySelector(".timer .time_left_txt") as HTMLElement;
      // const timeCount = document.querySelector(".timer .time_sec") as HTMLElement;
       //Si Bouton demmare est clique
      // start_btn!.onclick = () => {
      //   info_box.classList.add("activeInfo");//voir l'info box

      // }
      //Si Bouton sortie est clique
      // exit!.onclick = () => {
      //   info_box.classList.remove("activeInfo");//chace l'info box

      // }
      // //Si Bouton continue est clique
      // restart!.onclick = ()=>{
      //   info_box.classList.remove("activeInfo");//chace l'info box
      //   info_box.classList.add("activeInfo");//voir l'info box
      //   showQuestions(0);//Calling showQuetions function
      //   que_Counter(1);//passing 1 parameter to queCounter
      //   startTimer(15);//Calling startTimer function
      //   startTimer(0);//Calling startTimerLiner function


      // }
      // // ---------------------------------------------
      // let timeValue =15;
      // let que_count  =0;
      // let que_numb=1;
      // let userScore =0;
      // let counter;
      // let counterLine;
      // let wid =0;
      // // ---------------------------------------
        //  const restart_quiz =result_box.querySelector(".buttons .restart");
        //  const quit_quiz =result_box.querySelector(".buttons .quit");
      //----------------------------------------
      //si restartQuiz bouton et clique
      // restart_quiz!.onclick = (any)=>{
      //             quiz_box.classList.remove()
      // }
}

    questions =[
       {

       question:"مَاهِيَ حَرْفُ ثَالِثُ مِنْ حُرُوُفُ اَلْهِجَائِيَةِ",
       answer:[
            {text:"تَ", correct: true},
            {text: "َبَ", correct:false},
            {text:"نَ", correct:false},
            { text: "ثَ",correct:false},
          ]
        },
       {
       question:"مَاهِيَ إِسْمُ ثَوُرُ فِيِ بَمْبَرِيَ",
       answer:[
            {text:"ntura",correct:true},
            {text:"saga",correct:false},
            {text:"wulu",correct:false},
            "ثَ"
          ]
        },
       {
       question:" يَنْقَسْمُ اَلْجُمْلَةُ اَلْعَرَبِيَةُ إِلَيَ قِسْمَيْنِ أُذْكُرُهَا",
       answer:[
            {text:"اَلْحِرْفُ وَاَلْكَلاَمُ",correct:false},
            {text:"اَلْإِسْمِيَةُوَاَلْفِعْلِيَةُ",correct:true},
            {text:"اَلْإِسْمِيَةُوَاَلْحَرْفُ",correct:false},
            {text:"اَلْتَاءُوَاَلْفِعْلِيَةُ",correct:false},
          ]
        },
       {
       question:" اَلْأَيَامُ اَلْأُسُبُوُعِ كَمْ؟",
       answer:[
            {text:"1",correct:false},
            {text:"7",correct:true},
            {text:"12",correct:false},
            {text:"8",correct:false},
          ]
        },
       {
       question:"اَلْحُرُوُفُ هِجَائِيَةُ كَمْ؟",
       answer:[
            {text:"28",correct:true},
            {text:"29",correct:false},
            {text:"38",corretc:false},
            {text:"12",correct:false},
          ]
        },
       {
       question:"مَاهِيَ حَرْفُ آَخِرُ مِنْ حُرُوُفُ اَلْهِجَائِيَةِ",
       answer:[
            {text:"يَ",correct:true},
            {text:"قَ",correct:false},
            {text:"هَ",correct:false},
            {text:"وَ",correct:false},
          ]
        }
      ];
        questionElement = document.getElementById("question");
        answerButton= document.getElementById("answer-buttons");
        nextButtons = document.getElementById("next-btn");


        currentQuestionIndex = 0;
        score = 0;
        startQuiz(this: any) {
          this.currentQuestionIndex = 0;
          this.score = 0;
          this.nextButtons.innerHTML = "Next";
          this.showQuestion();
        }
        showQuestion() {
        this.resetState();
         let currentQuestion = this.questions[this.currentQuestionIndex];
         let questionNo = this.currentQuestionIndex +1 ;
        this.questionElement!.innerHTML = questionNo + ". " + currentQuestion.
        question;

//         currentQuestion.answer.forEach(answer => {
//              const button = document.createElement("button");
//              button.innerHTML = answer.toString();
//              button.classList.add("btn");
//              this.answerButton?.appendChild(button);
//              button.addEventListener("click", selectAnswer);
//              if(answer.correct){
//               button.dataset.correct = answer.correct;
//              }
//         });

//         }
//              resetState(): void {
//               this.nextButton.style.display = "none";
//                while(this.answerButton.firstChild){
//                 this.answerButtons.removeChild(this.answerButton.firstChild);
//       }

// }

// selectAnswer(e) {
//   const selectedbtn = e.traget;
//   const isCorrect = selectedbtn.dataset.correct === "true";
//   if(isCorrect){
//     selectedbtn.classList.add("correct");

//   }else{
//     selectedbtn.classList.add("incorrect");
//   }
// }
// Array:from(this.answerButton.children).forEach(button => {
//   if (button.datset.correct=== "true") {
//       button.classList.add("correct");
//   }
//     button.disabled = true;
// });
//   nextButton.style.display = "block";

  interface Answer {
        text: string;
        correct: boolean;
    }

    interface Question {
        question: string;
        answer: Answer[];
    }

    class Quiz {
        questions: Question[];
        questionElement: HTMLElement | null;
        answerButton: HTMLElement | null;
        nextButton: HTMLElement | null;
        currentQuestionIndex: number;
        score: number;

        constructor() {
            this.questions = [
                {
                    question: "مَاهِيَ حَرْفُ ثَالِثُ مِنْ حُرُوُفُ اَلْهِجَائِيَةِ",
                    answer: [
                        {text: "تَ", correct: true},
                        {text: "َبَ", correct: false},
                        {text: "نَ", correct: false},
                        {text: "ثَ", correct: false},
                    ]
                },
                {
                question:"مَاهِيَ إِسْمُ ثَوُرُ فِيِ بَمْبَرِيَ",
                answer:[
                     {text:"ntura",correct:true},
                     {text:"saga",correct:false},
                     {text:"wulu",correct:false},
            
                   ]
                 },
                {
                question:" يَنْقَسْمُ اَلْجُمْلَةُ اَلْعَرَبِيَةُ إِلَيَ قِسْمَيْنِ أُذْكُرُهَا",
                answer:[
                     {text:"اَلْحِرْفُ وَاَلْكَلاَمُ",correct:false},
                     {text:"اَلْإِسْمِيَةُوَاَلْفِعْلِيَةُ",correct:true},
                     {text:"اَلْإِسْمِيَةُوَاَلْحَرْفُ",correct:false},
                     {text:"اَلْتَاءُوَاَلْفِعْلِيَةُ",correct:false},
                   ]
                 },
                {
                question:" اَلْأَيَامُ اَلْأُسُبُوُعِ كَمْ؟",
                answer:[
                     {text:"1",correct:false},
                     {text:"7",correct:true},
                     {text:"12",correct:false},
                     {text:"8",correct:false},
                   ]
                 },
                {
                question:"اَلْحُرُوُفُ هِجَائِيَةُ كَمْ؟",
                answer:[
                     {text:"28",correct:true},
                     {text:"29",correct:false},
                     {text:"38",correct:false},
                     {text:"12",correct:false},
                   ]
                 },
                {
                question:"مَاهِيَ حَرْفُ آَخِرُ مِنْ حُرُوُفُ اَلْهِجَائِيَةِ",
                answer:[
                     {text:"يَ",correct:true},
                     {text:"قَ",correct:false},
                     {text:"هَ",correct:false},
                     {text:"وَ",correct:false},
                   ]
                 }
                // ... other questions ...
            ];
            this.questionElement = document.getElementById("question");
            this.answerButton = document.getElementById("answer-buttons");
            this.nextButton = document.getElementById("next-btn");
            this.currentQuestionIndex = 0;
            this.score = 0;
        }

        startQuiz() {
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.nextButton!.innerHTML = "Next";
            this.showQuestion();
        }

        showQuestion() {
            this.resetState();
            let currentQuestion = this.questions[this.currentQuestionIndex];
            let questionNo = this.currentQuestionIndex + 1;
            this.questionElement!.innerHTML = questionNo + ". " + currentQuestion.question;

            currentQuestion.answer.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                this.answerButton!.appendChild(button);
                button.addEventListener("click", (e) => this.selectAnswer(e, answer.correct));
            });
        }

        resetState() {
            this.nextButton!.style.display = "none";
            while (this.answerButton!.firstChild) {
                this.answerButton!.removeChild(this.answerButton!.firstChild);
            }
        }

        selectAnswer(e: Event, isCorrect: boolean) {
            const selectedButton = e.target as HTMLButtonElement;
            if (isCorrect) {
                selectedButton.classList.add("correct");
            } else {
                selectedButton.classList.add("incorrect");
            }
            Array.from(this.answerButton!.children).forEach(button => {
                if ((button as HTMLElement).dataset['correct'] === "true") {
                    button.classList.add("correct");
                }
                (button as HTMLElement);
            });
            this.nextButton!.style.display = "block";
        }
    }

    const quiz = new Quiz();
    quiz.startQuiz();
}
  resetState() {
    throw new Error('Method not implemented.');
  }
}


