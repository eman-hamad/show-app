import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logi',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.css']
})
export class LogiComponent implements OnInit {
 
  registerform:FormGroup;
    constructor( private formbuilder: FormBuilder , private routing :Router) {
       this.registerform = this.formbuilder.group({

    

        register_name: ['',[Validators.required]],

        register_email:['',[Validators.required , Validators.pattern ("^\\w+@\\w+\\.\\w+$")]],
        register_username: ['',[Validators.required, Validators.pattern ("^[a-zA-Z0-9\-_\.]+$")]],
        register_password:['',[Validators.required , Validators.pattern (".{8,32}")]],
        register_conpassword:['',[Validators.required , Validators.pattern (".{8,32}")]],

      });
     }
  
    ngOnInit(): void {
    }
  
  
  
    //   console.log(loginForm);
    //   console.log(this.myemail)
    //   this.routing.navigate([''])
    
  get registerFormControl(){

    return this.registerform.controls;
  }
    
  submitregisterform(){
    console.log(this.registerform);
    this.routing.navigate(['']);
  }
 
  }
  