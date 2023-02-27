import { ApiService } from './../api.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-board',
  templateUrl: './quiz-board.component.html',
  styleUrls: ['./quiz-board.component.scss']
})
export class QuizBoardComponent implements OnInit {
  question: any;
  answer: any;
  index: any = 0;
  radioValue: any = 0;
  // QuestionForm:any = FormGroup;

  time: any = 15;
  optionSelected: any = [];
  questions = [
    {
      "question": "What is the scientific name of a butterfly?",
      "answers": [
        "Apis",
        "Coleoptera",
        "Formicidae",
        "Rhopalocera"
      ],
      "correctIndex": 3
    },
    {
      "question": "How hot is the surface of the sun?",
      "answers": [
        "1,233 K",
        "5,778 K",
        "12,130 K",
        "101,300 K"
      ],
      "correctIndex": 1
    },
    {
      "question": "Who are the actors in The Internship?",
      "answers": [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson"
      ],
      "correctIndex": 3
    },
    {
      "question": "What is the capital of Spain?",
      "answers": [
        "Berlin",
        "Buenos Aires",
        "Madrid",
        "San Juan"
      ],
      "correctIndex": 2
    },
    {
      "question": "What are the school colors of the University of Texas at Austin?",
      "answers": [
        "Black, Red",
        "Blue, Orange",
        "White, Burnt Orange",
        "White, Old gold, Gold"
      ],
      "correctIndex": 2
    },
    {
      "question": "What is 70 degrees Fahrenheit in Celsius?",
      "answers": [
        "18.8889",
        "20",
        "21.1111",
        "158"
      ],
      "correctIndex": 2
    },
    {
      "question": "When was Mahatma Gandhi born?",
      "answers": [
        "October 2, 1869",
        "December 15, 1872",
        "July 18, 1918",
        "January 15, 1929"
      ],
      "correctIndex": 0
    },
    {
      "question": "How far is the moon from Earth?",
      "answers": [
        "7,918 miles (12,742 km)",
        "86,881 miles (139,822 km)",
        "238,400 miles (384,400 km)",
        "35,980,000 miles (57,910,000 km)"
      ],
      "correctIndex": 2
    },
    {
      "question": "What is 65 times 52?",
      "answers": [
        "117",
        "3120",
        "3380",
        "3520"
      ],
      "correctIndex": 2
    },
    {
      "question": "How tall is Mount Everest?",
      "answers": [
        "6,683 ft (2,037 m)",
        "7,918 ft (2,413 m)",
        "19,341 ft (5,895 m)",
        "29,029 ft (8,847 m)"
      ],
      "correctIndex": 3
    },
    {
      "question": "When did The Avengers come out?",
      "answers": [
        "May 2, 2008",
        "May 4, 2012",
        "May 3, 2013",
        "April 4, 2014"
      ],
      "correctIndex": 1
    },
    {
      "question": "What is 48,879 in hexidecimal?",
      "answers": [
        "0x18C1",
        "0xBEEF",
        "0xDEAD",
        "0x12D591"
      ],
      "correctIndex": 1
    }
  ]
  timer: any;
  constructor( private router: Router, private api: ApiService) {

  }

  ngOnInit(): void {

    const index = localStorage.getItem('index');
    if (index) {
      this.index = +index;
    }
    const result = localStorage.getItem('result');
    if (result) {
      this.optionSelected = JSON.parse(result);
    }
    console.log(this.index, "question number");
    this.question = this.questions[this.index];
    this.setTimer();
  }

  getAnswer(radioValue: any) {
    console.log(radioValue);
    this.answer = radioValue;
  }

  setTimer() {
    this.timer = setInterval(() => {
      if (this.time >= 1) {
        this.time--;
        if (this.time == 0) {
          this.radioValue = undefined;
          console.log('this.radioValue');
          
          // if (this.index == this.questions.length - 1) {
          //   this.router.navigate(['/result']);
          // }
        }
      }
    }, 1000)
  }

  next() {
    console.log(this.index, "question number");
    this.radioValue = undefined;
    console.log("Hello from next", this.index);
    this.optionSelected.push({ index: this.index, selected: this.answer });
    this.time = 15;
    clearInterval(this.timer);
    this.setTimer();
    console.log(this.index, "question number");

    if (this.index <= this.questions.length - 1) {
      console.log(this.index, "question number inside if");
      localStorage.setItem('index', this.index);
      localStorage.setItem('result', JSON.stringify(this.optionSelected));
      this.index = this.index + 1;
      this.question = this.questions[this.index];
      if (this.index == this.questions.length ) {
        this.router.navigate(['/result']);
      }
    }

  }

}

