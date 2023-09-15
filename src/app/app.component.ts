import { Component,Input} from '@angular/core';

import { Dataposts } from './dataposts';
import { Routes, RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../styles.scss']
})
export class AppComponent {
  title = 'webpage_angular';
  
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
