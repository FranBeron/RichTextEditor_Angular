import { SkeletonLoadComponent } from './skeleton-load/skeleton-load.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'', component: SkeletonLoadComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
