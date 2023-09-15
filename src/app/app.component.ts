import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dataposts } from './dataposts';
import { Data } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../styles.scss']
})
export class AppComponent implements OnInit {
  title = 'webpage_angular';
  data:Dataposts[] = [];
  public constructor(private http:HttpClient){

  };
  public ngOnInit(): void {
    const url:string ='/assets/posts.json'
    this.http.get<Dataposts[]>(url).subscribe((response)=>
    {
      this.data = response;

    }
    )
  }
}
