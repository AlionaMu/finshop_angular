import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
            CommonModule,
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            FormsModule,
            MatButtonModule,
            MatCheckboxModule
          ],
  exports: [
    FormComponent
  ],
})
export class FormModule {}
