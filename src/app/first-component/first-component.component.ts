import { Component, Input } from '@angular/core';
import { Dataposts } from '../dataposts';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss','../../styles.scss']
})
export class FirstComponentComponent {

    @Input() Inputdata:Dataposts[] = [];     
    
    @Input() class = '';
    default_input = "sidebar-hidden";
    open = false;
    showMenu(){
      console.log("data",this.Inputdata);

      if(this.open === false){
        this.default_input = "sidebar animate-left";
        this.open = true;
      }else{
        this.default_input = "sidebar-hidden";
        this.open = false;
      }
    }
}
/*counter = 0;
    setCounter(){
      this.counter = this.counter +1;
    }*/