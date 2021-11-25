import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
  ],
  exports: [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
  ]
  })
  
  export class MaterialModule {}