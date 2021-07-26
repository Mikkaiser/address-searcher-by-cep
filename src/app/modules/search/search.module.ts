import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsComponent } from './components/fields/fields.component';
import { FormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDialogComponent} from "./components/mat-dialog/mat-dialog.component";

@NgModule({
  declarations: [FieldsComponent, MatDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SearchRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [FieldsComponent],
  providers:[
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ]
})
export class SearchModule {}
