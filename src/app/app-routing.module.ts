import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
const routes: Routes = [
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }