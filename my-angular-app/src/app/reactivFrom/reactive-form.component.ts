import {  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
    userForm:FormGroup;

    constructor(private fb:FormBuilder){
       this.userForm = fb.group({
            date:['',[Validators.required]],
            username:['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            address:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            phone:['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
            reason:['',[Validators.required]],
            accountNumber:[''],
            description:['',[Validators.required]]
        })
    }

    ngOnInit() {
        this.userForm.get('reason')?.valueChanges.subscribe(value => {
            const accountNumberControl = this.userForm.get('accountNumber');
            const descriptionControl = this.userForm.get('description');
            if (value === 'new') {
                accountNumberControl?.setValidators([Validators.required]);
                descriptionControl?.clearValidators();
            } else {
                accountNumberControl?.clearValidators();
                descriptionControl?.setValidators([Validators.required]);
            }
            accountNumberControl?.updateValueAndValidity();
            descriptionControl?.updateValueAndValidity();
        });
    }

    onSubmit() {
        if (this.userForm.valid) {
            console.log('Form submitted:', this.userForm.value);
            alert('הטופס נשלח בהצלחה!');
            // Here you can send the data to a server
        } else {
            alert('הטופס לא תקין. אנא מלא את כל השדות הנדרשים.');
        }
    }


}