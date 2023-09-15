import { Component, Input,OnInit } from '@angular/core';
import { Dataposts } from '../dataposts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss','../../styles.scss']
})
export class FirstComponentComponent implements OnInit {

    //@Input() Inputdata:Dataposts[] = [];     
    Inputdata:Dataposts[] = [];
  public constructor(private http:HttpClient){

  };
  public ngOnInit(): void {
    const url:string ='/assets/posts.json'
    this.http.get<Dataposts[]>(url).subscribe((response)=>
    {
      this.Inputdata = response;

    }
    )
  }
    
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
/*counter = 0;
    setCounter(){
      this.counter = this.counter +1;
    }*/