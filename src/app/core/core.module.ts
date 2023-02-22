import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {}
