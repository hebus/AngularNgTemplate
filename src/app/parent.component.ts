import { Component, ContentChild, TemplateRef } from "@angular/core";

@Component({
  selector: "parent",
  templateUrl: "./parent.component.html",
})
export class ParentComponent {
  @ContentChild('template') template: TemplateRef<any>;
  @ContentChild('toto') toto: TemplateRef<any>;

  items = [1, 2, 3];
  state = true;
}
