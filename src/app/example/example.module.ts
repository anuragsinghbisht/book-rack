import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExampleRoutes as routes } from './example.routes';
// Providers
import { ExampleActions } from './actions/example.actions';
// Components
import { ExampleComponent } from './component/example.component';


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ExampleComponent],
  providers: [
    ExampleActions
  ]
})
export class ExampleModule { }
