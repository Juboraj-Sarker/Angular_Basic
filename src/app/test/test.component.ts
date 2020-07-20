import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Juboraj Sarker";
  public siteUrl = window.location.href;
  public isDisabled = true;
  public hasError = false;
  public successClass = "text-success";
  public isSpecial = true;
  public myColor = "blue";
  public greetings = "";
  public updateValue = "";
  public displayForNgIf = false;
  public color = "fsdasdf";
  public colors = ["red", "green", "blue", "yellow", "orange"];
  public messagesForSubString = "This message is for subString example in ANGULAR";
  public date = new Date();
  @Input('parentData') public parentData;
  @Output() public childEvent = new EventEmitter();

  public messageClass = {
    "text-success" : ! this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyle = {
    color: "red",
    fontStyle : "italic",
    fontSize: "20px"
  }
  public person = {
    "FirstName" : "JUBORAJ",
    "lastName" : "SARKER"
  }

  constructor() { }

  ngOnInit() {
  }












  getUser(){

    return "This is example of method in Angular and the dynamic value is: " + this.name;
  }

  myClickMethod(){
    this.greetings = "You clicked on button";
  }

  myClickMethodWithParameter(value){

    alert(value)
  }

  fireEvent(){
    this.childEvent.emit('Message Passed from TEST COMPONENT');
  }

}
