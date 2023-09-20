import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { CounterButtonComponent } from './_pages/counter-button/counter-button.component';
import { CounterDisplayComponent } from './_pages/counter-display/counter-display.component';
import { MaterialModule } from './_modules/material.module';
import { FormsModule } from '@angular/forms';
import { CustomCounterComponent } from './_pages/custom-counter/custom-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { blogReducer } from './store/blog/blog.reducer';
import { BlogComponent } from './_pages/blog/blog.component';

@NgModule({
  declarations: [AppComponent, CounterButtonComponent, CounterDisplayComponent, CustomCounterComponent, BlogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ counter: counterReducer, blog:blogReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
