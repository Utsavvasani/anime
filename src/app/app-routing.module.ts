import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeWatchingComponent } from './anime-watching/anime-watching.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details', component: BlogDetailsComponent},
  { path: 'anime-details', component: AnimeDetailsComponent},
  { path: 'anime-watching', component: AnimeWatchingComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'login', component: LoginComponent},
  // { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
