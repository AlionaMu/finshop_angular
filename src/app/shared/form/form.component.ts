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

  public isSignUpFailed: boolean = false;

  public errorMessage: string = '';

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

  /*public onSubmit(): void {
    const login: string = this.login?.value;
    const name: string = this.name?.value;
    const password: string = this.password?.value;

    this.authService.signUp(name, login, password).subscribe({
      next: (response: SignUpResponse) => {
        this.tokenStorage.saveUser(response);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.translate
          .get(['auth.success', 'dialog.close'])
          .subscribe((message: Record<string, string>) => {
            this.snackBar.open(
              message['auth.success'],
              message['dialog.close'],
              {
                duration: 3000,
                panelClass: ['green-snackbar'],
              },
            );
          });
        this.router.navigate(['auth', 'login']).then();
      },
      error: (response: HttpErrorResponse) => {
        this.isSignUpFailed = true;
        let errorMessage: string = '';
        switch (response?.error?.message) {
          case 'User was not founded!':
            errorMessage = 'auth.user-not-found';
            break;
          default:
            errorMessage = response.message;
            break;
        }
        this.translate
          .get([errorMessage, 'dialog.close'])
          .subscribe((message: Record<string, string>) => {
            this.snackBar.open(message[errorMessage], message['dialog.close'], {
              duration: 3000,
              panelClass: ['red-snackbar'],
            });
          });
      },
    });
  }*/

  public initForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
    });
  }
}
