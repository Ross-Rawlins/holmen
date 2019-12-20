import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'holmen';
  diadnosesCount:number
  
  ngOnInit()
  {
      this.diadnosesCount = 0;
  }

  
  toggleDiagnoses(option:any)
  {
      option?this.diadnosesCount++:this.diadnosesCount--;
      console.log(this.diadnosesCount)
  }
}
