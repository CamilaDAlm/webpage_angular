import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.scss']
})
export class AboutComponentComponent {
  @Input() class = '';
    default_input = "sidebar-hidden";
    open = false;
    showMenu(){

      if(this.open === false){
        this.default_input = "sidebar animate-left";
        this.open = true;
      }else{
        this.default_input = "sidebar-hidden";
        this.open = false;
      }
    }

}
