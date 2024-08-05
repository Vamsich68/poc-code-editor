import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      AppComponent,
      BrowserModule,
      FormsModule
      //MonacoEditorModule.forRoot()
    ],
    exports : [],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AppModule {
   }
  