import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-res-details',
  templateUrl: './res-details.component.html',
})
export class ResDetailsComponent implements OnInit {
  currentStep: Number = 1;
  postData = {name:'',property_type:'', website_url:'', contact_number:'',email:'',total_employees:'',total_sections:'',address:''}
  @Output()
  goToStep: EventEmitter<Number> = new EventEmitter<Number>(); // creating an output event

  
  constructor() { }

  ngOnInit() {
  }
  goTo2(){
    this.goToStep.emit(2); 
    console.log(this.postData);
  }

}
