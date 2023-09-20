import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDisplayComponent } from './_pages/counter-display/counter-display.component';
import { BlogComponent } from './_pages/blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'counter', component: CounterDisplayComponent },
  { path: 'blog', component: BlogComponent },
  { path: '',   redirectTo: '/counter', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
