import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-cred',
  templateUrl: './user-cred.component.html',
})
export class UserCredComponent implements OnInit {
  currentStep: Number = 3;
  @Output()
  goToStep: EventEmitter<Number> = new EventEmitter<Number>(); 
  constructor() { }

  ngOnInit() {
  }
  
  goTo2(){
    this.goToStep.emit(2); 
  }
}
