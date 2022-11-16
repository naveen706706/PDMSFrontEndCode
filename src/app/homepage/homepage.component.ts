import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    var conf = confirm("Are you sure, you want to close this tab?");
                if (conf == true) {
                 // window.open('', '_self', '');
                  window.close();
                }
  }

}
