import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

const counter = 1;

const inputs = [
  { 
    label: 'Assignment 1',
    value: '',
  },
  { 
    label: 'Weight 1',
    value: '',
  }
];

addf() {
  this.counter += 1;
  var curitem  = 'Assignment ' + this.counter;
  var curitem2 = 'Weight ' + this.counter;
  this.inputs.push(
    {
      label: curitem,
      value: ''
    },
    {
      label: curitem2,
      value: ''
    },
  );
}

testprint() {
  console.log(this.inputs);
}

 

}
