import { Component, ContentChild, TemplateRef } from "@angular/core";
import { ParentComponent } from "./parent.component";

@Component({
  selector: "content",
  templateUrl: "./content.component.html",
})
export class ContentComponent extends ParentComponent {

  test(i){
    console.log('click sur ' + i);
  }
  
}