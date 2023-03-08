import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { SkeletonLoadComponent } from './skeleton-load/skeleton-load.component';

@NgModule({
  declarations: [
    AppComponent,
    RichTextEditorComponent,
    SkeletonLoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
