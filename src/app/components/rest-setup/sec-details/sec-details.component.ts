import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResDetailService } from '../../../services/res-detail.service';
@Component({
  selector: 'app-sec-details',
  templateUrl: './sec-details.component.html',
  styleUrls: ['./sec-details.component.css'],
  providers: [ResDetailService]
})
export class SecDetailsComponent implements OnInit {
  currentStep: Number = 2;
  secCount = {total_sections:''}
  @Output()
  goToStep: EventEmitter<Number> = new EventEmitter<Number>(); 
  constructor(private ResDetailService: ResDetailService) { }

  ngOnInit() {
    this.getSecCount();
  }
  getSecCount(){
    this.ResDetailService.getRestDetail().subscribe(response => {
      console.log(response)
    })
  }
  goTo1(){
    this.goToStep.emit(1); 
  }
  goTo3(){
    this.goToStep.emit(3); 
  }
}
