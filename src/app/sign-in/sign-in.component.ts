import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hasBeenSubmit : boolean = false;

  form = this.formBuilder.group({
    "firstName":["",Validators.required],
    "lastName":["", Validators.required],
    "email":["", Validators.required],
    "password": ["",Validators.required],
    "confirmPassword": ["", Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }

  onSubmit(form: FormGroup){
    this.hasBeenSubmit = true;
    // const email = form.value.email;
    // const firstname = form.value.firstname;
    // const lastname = form.value.lastname;
    // const password = form.value.password;
    // const passwordConfirmation = form.value.passwordConfirm;
    console.log(form.get("firstName")?.status);
    console.log(this);

    setInterval(()=>{
      this.hasBeenSubmit =false;
    }, 1000);
    
  }

  public checkEmailForm(email: any) : boolean{
    let regex = new RegExp('[a-zA-Z0-9]+@[a-zA-Z]+[\\.][a-z]{2,}');
  
    return regex.test(email.toString());
  }
}
