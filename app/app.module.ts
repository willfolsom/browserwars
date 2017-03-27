import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorInputComponent } from './colorInput.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ ColorInputComponent, AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}