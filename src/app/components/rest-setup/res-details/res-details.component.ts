import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResDetailService } from '../../../services/res-detail.service';

@Component({
  selector: 'app-res-details',
  templateUrl: './res-details.component.html',
  styleUrls: ['./res-details.component.css'],
  providers: [ResDetailService]
})
export class ResDetailsComponent implements OnInit {
  currentStep: Number = 1;
  postData = {name:'',property_type:'Restaurant', website_url:'', contact_number:'',email:'',total_employees:'',total_sections:'',address:''}
  @Output()
  goToStep: EventEmitter<Number> = new EventEmitter<Number>(); // creating an output event

  
  constructor(private ResDetailService: ResDetailService) { }

  ngOnInit() {
  }
  goTo2(){
    this.goToStep.emit(2);
    this.ResDetailService.restDetail(this.postData).subscribe(response => {
      console.log(response);
    } ); 
    console.log(this.postData);
  }

}
