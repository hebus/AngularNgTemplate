import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent.component";
import { ContentComponent } from "./content.component";

@NgModule({
  declarations: [AppComponent, ParentComponent, ContentComponent],
  imports: [BrowserModule],
  providers: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
