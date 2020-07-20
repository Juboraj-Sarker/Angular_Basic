import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import 
{
  MatButtonModule,
  MatGridListModule,
  MatTableModule,
  MatSortModule
  
}

from '@angular/material';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


const MaterialComponent = [
  MatButtonModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSortModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule {
  
 }

