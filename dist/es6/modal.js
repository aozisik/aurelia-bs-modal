import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement('modal')
@inject(Element)
export class Modal {
  @bindable showing = false;
  constructor(element) {
    this.element = element;
  }
  attached(){
    $(this.modal).modal({show: false, backdrop: "static", keyboard: false})
    .on('show.bs.modal', () => {
      this.showing = true;
    })
    .on('hide.bs.modal', () => {
      this.showing = false;
    });
  }
  showingChanged(newValue){
    if (newValue) {
      $(this.modal).modal('show')
    } else {
      $(this.modal).modal('hide')
    }
  }
}
