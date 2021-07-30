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
import { FieldsService } from './components/fields/fields.service';

@NgModule({
  declarations: [FieldsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SearchRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [FieldsComponent],
  providers: [
    FieldsService
  ]
})
export class SearchModule { }
