import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-setup',
  templateUrl: './rest-setup.component.html'
})
export class RestSetupComponent implements OnInit {
  currentStep: Number = 1;
  constructor() { }

  ngOnInit() {
  }
  changeStep(step: Number ): void {
    this.currentStep = step;
  }

}
