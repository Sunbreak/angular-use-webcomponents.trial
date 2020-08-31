import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[] = [];
  
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  addPerson() {
    this.people = [
      ...this.people,
      new Person(this.form.value.firstName, this.form.value.lastName)
    ];
    this.form.reset();
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}
}