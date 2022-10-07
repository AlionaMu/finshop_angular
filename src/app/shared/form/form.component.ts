import { PostService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup = {} as FormGroup;

  public isSuccessful: boolean = false;

  public isNotSuccessful: boolean = false;

  public isSignUpFailed: boolean = true;

  public isChecked = false;

  public errorMessage: string = '';

  public disabled = true;

  public constructor(

    private formBuilder: FormBuilder,

    public postService: PostService
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

    this.postService.postData(name, phone, company).subscribe({
      next: (response: any) => {
        this.isSuccessful = true;
      },
      error: (error: any) => {
        this.isNotSuccessful = true;
      }
    });
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+375(\s+)?\(?(17|29|25|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/)]),
      company: new FormControl(''),
    });
  }
}
