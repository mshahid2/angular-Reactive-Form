import { Component, VERSION, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Reactive Form ' + VERSION.major;
  loginFormGroup : FormGroup;
  ngOnInit()
  {
    this.loginFormGroup = new FormGroup({
      name: new FormControl("",[Validators.required]),
      password : new FormControl("",[Validators.required])
    })
  }
  validateUser(event){
    console.log(event.value);
  }
}
