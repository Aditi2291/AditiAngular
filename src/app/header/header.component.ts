import { Component, OnInit } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//@Output() featureSelected= new EventEmitter<String>();

  onSelect(feature : String)
  {
    //this.featureSelected.emit(feature);

  }

  constructor() { }

  ngOnInit() {
  }

}
