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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomCounterComponent } from './_pages/custom-counter/custom-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { blogReducer } from './store/blog/blog.reducer';
import { BlogComponent } from './_pages/blog/blog.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { AppState } from './store/global/app.state';
import { AddBlogComponent } from './_pages/blog/add-blog/add-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    BlogComponent,
    NavComponent,
    NotFoundComponent,
    AddBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
