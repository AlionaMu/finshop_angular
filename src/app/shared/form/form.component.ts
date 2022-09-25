import { Component, OnInit } from '@angular/core';
//import { SignUpResponse } from '../../models/authorization.model';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
//import { MatSnackBar } from '@angular/material/snack-bar';
//import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup = {} as FormGroup;

  public isSuccessful: boolean = false;

  public isSignUpFailed: boolean = true;

  public errorMessage: string = '';

  public disabled = false;

  public constructor(
    //private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {}

  public get name(): AbstractControl | null {
    return this.form.get('name');
  }

  public get phone(): AbstractControl | null {
    return this.form.get('phone');
  }

  public get company(): AbstractControl | null {
    return this.form.get('company');
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    const name: string = this.name?.value;
    const phone: string = this.phone?.value;
    const company: string = this.company?.value;
    this.isSignUpFailed = false;

    console.log(name, phone, company)
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]{12}')]),
      company: new FormControl(''),
    });
  }
}
