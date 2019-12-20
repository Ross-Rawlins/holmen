import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'holmen';
  diadnosesCount:number
  options:any
  
  ngOnInit()
  {
      this.options = {
          option1:false,
          option2:false,
          option3:false,
          option4:false,
          option5:false,
      }
      this.diadnosesCount = 0;
  }

  
  toggleDiagnoses(option:any)
  {
      option?this.diadnosesCount++:this.diadnosesCount--;
      console.log(this.diadnosesCount)
  }
}
