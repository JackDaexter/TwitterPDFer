import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hasBeenSubmit : boolean = false;
  diffPassword : boolean = false;
  
  form = this.formBuilder.group({
    "firstName":["",Validators.required],
    "lastName":["", Validators.required],
    "email":["", Validators.required],
    "password": ["",Validators.required],
    "confirmPassword": ["", Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private navigationService : NavigationService) { }


  ngOnInit(): void {
  }

  onSubmit(form: FormGroup){
    this.hasBeenSubmit = true;
    const email : string  = form.value.email;
    const firstname : string = form.value.firstname;
    const lastname : string = form.value.lastname;
    const password : string = form.value.password;
    const passwordConfirmation : string = form.value.passwordConfirm;

    if(password === passwordConfirmation){
      
    }
    else{

    }
    
  }

  back():void{
    this.navigationService.back();
  }


  public checkEmailForm(email: any) : boolean{
    let regex = new RegExp('[a-zA-Z0-9]+@[a-zA-Z]+[\\.][a-z]{2,}');
    
    return regex.test(email.toString());
  }
}
