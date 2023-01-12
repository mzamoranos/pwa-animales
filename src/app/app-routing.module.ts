import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AnimalComponent } from './components/animal/animal.component'
import { AnimalesComponent } from './components/animales/animales.component'

const routes: Routes = [
  { path: '', component: AnimalesComponent },
  { path: 'animal/:id', component: AnimalComponent },
  { path: '**', component: AnimalesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
