import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sec-details',
  templateUrl: './sec-details.component.html',
  styleUrls: ['./sec-details.component.css']
})
export class SecDetailsComponent implements OnInit {
  currentStep: Number = 2;
  @Output()
  goToStep: EventEmitter<Number> = new EventEmitter<Number>(); 
  constructor() { }

  ngOnInit() {
  }
  goTo1(){
    this.goToStep.emit(1); 
  }
  goTo3(){
    this.goToStep.emit(3); 
  }
}
