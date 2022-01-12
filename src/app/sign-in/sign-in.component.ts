import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { SignInService } from './services/sign-in.service';

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

  constructor(private formBuilder: FormBuilder, 
              private navigationService : NavigationService,
              private signInService : SignInService) { }


  ngOnInit(): void {
  }

 
  onSubmit(form: FormGroup){
    this.hasBeenSubmit = true;
    const email : string  = form.value.email;
    const firstname : string = form.value.firstname;
    const lastname : string = form.value.lastname;
    const password : string = form.value.password;
    const passwordConfirmation : string = form.value.confirmPassword;

    const myObserver = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
  

    if(password === passwordConfirmation){
      console.log("Prostitué !");
      
      const elem$ = this.signInService.addUser({"elem" : "value"});
      elem$.subscribe(
        (elem) => {
          console.log("The value is :" + elem);
        },
        (err) =>{
          console.error(err);
        },
        () => {
          console.log("observable complete");
        }
      )
      this.diffPassword = false;
    }
    else{
      this.diffPassword = true;
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
