import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsComponent } from './components/fields/fields.component';
import { SearchRoutingModule } from './search-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FieldsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SearchRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [FieldsComponent],
})
export class SearchModule {}
