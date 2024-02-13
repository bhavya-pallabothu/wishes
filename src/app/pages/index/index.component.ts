import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  submitted = false;
  hide = true;
  focus;
  focus1;
  focus2;
  passwordMatching = "Bhavya'sTej";
  form: FormGroup;

  constructor(private fb:FormBuilder, private route:Router) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {

    this.form = this.fb.group({
      'username': new FormControl('Teja'),
      'password': new FormControl('',[Validators.required])
  });
    
  this.customValidatorPW();
   
  }
 
  onSubmit(){
    this.submitted = true
    console.log(this.form)
    if (this.form.valid) { this.route.navigate(['/carousal']) }
   
  }
  customValidatorPW(){
    this.form.controls.password.valueChanges.subscribe(pwd=>{
      if(pwd !== this.passwordMatching){
        this.form.controls.password.setErrors({ incorrect: true, message: 'Passwords did not match'});   
      }
    })
  }

}
