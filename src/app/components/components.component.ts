import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {
 
    username : any;
    nome : any;
    name: "Nome";
    questions: any;
    currentIndex: number;
    notAttempted: any;
    correct: any;
    currentQuestionSet: any;
    start = false;
    gameover = false;
    buttonname = "Iniciar Quiz";
  
    constructor() {
      //Creating summy questions Json dta
      this.questions = [
        {
          id: 1,
          question: 'Quantos flips eu consigo acertar melhor q vc?',
          option: [
            { optionid: 1, name: ' 10x mais' },
            { optionid: 2, name: ' 0' },
            { optionid: 3, name: ' -1x' },
            { optionid: 4, name: ' mediun' }
          ],
          answer: 1,
          selected: 0
        },
        {
          id: 2,
          question: 'Seilaaa.',
          option: [
            { optionid: 1, name: ' vtnc' },
            { optionid: 2, name: 'cl bc' },
            { optionid: 3, name: '2 ' },
            { optionid: 4, name: '3' }
          ],
          answer: 4,
          selected: 0
        },
        {
          id: 3,
          question: 'Quantos gatos eu tenho?',
          option: [
            { optionid: 1, name: ' Um gato' },
            { optionid: 2, name: ' Dois gatos' },
            { optionid: 3, name: ' Três gatos' },
            { optionid: 4, name: ' Quatro gatos' }
          ],
          answer: 3,
          selected: 0
        },
        {
          id: 4,
          question: 'Estilo musical favorito',
          option: [
            { optionid: 1, name: ' Rock' },
            { optionid: 2, name: ' Dark Wave' },
            { optionid: 3, name: ' Trap' },
            { optionid: 4, name: ' Classica' }
          ],
          answer: 2,
          selected: 0
        },
        {
          id: 5,
          question: 'Minha skatualidade',
          option: [
            { optionid: 1, name: ' Incrivel' },
            { optionid: 2, name: ' Melhor q a sua' },
            { optionid: 3, name: ' Sou melhor cl bc' },
            { optionid: 4, name: ' sla mn' }
          ],
          answer: 4,
          selected: 0
        }
      ];
      
      this.currentIndex = 0;
      this.currentQuestionSet = this.questions[this.currentIndex];
    }
  
    ngOnInit() {
    }
    
    onSubmit(nome: string) {
      this.nome = localStorage.setItem('username', this.nome);
    }
  
    next() {
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestionSet = this.questions[this.currentIndex];
    }
    
    submit() {
      this.buttonname = "Replay";
      if (this.currentIndex + 1 == this.questions.length) {
        this.gameover = true;
        this.start = false;
        this.correct = 0;
        this.notAttempted = 0;
        this.questions.map(x => {
          if (x.selected != 0) {
            if (x.selected == x.answer)
            this.correct = this.correct + 1;
          }
          else {
            this.notAttempted = this.notAttempted + 1;
          }
          x.selected = 0;
        });
      }
      
    }
    startQuiz() {
      this.gameover = false;
      this.currentIndex = 0;
      this.currentQuestionSet = this.questions[this.currentIndex];
      this.start = true;
    }  
  }
  