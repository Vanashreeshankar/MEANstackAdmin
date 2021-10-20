import { NgModule } from '@angular/core';

import { MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const Material= [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
