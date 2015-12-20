/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-code-cell')
class AlCodeCell extends polymer.Base {
  @property({ type: String, notify: true })
  text: string;  

  editing: boolean;

  editedText: string;
  formattedText: string;

  ready() {
    this.editing = false;
  }

  static formatText(rawText): string {
    return rawText
  }

  @observe('text')
  textChanged(newValue) {
    this.formattedText = AlCodeCell.formatText(newValue);
  }

  @listen('click')
  startEdit() {
    this.editedText = this.text;
    this.editing = true;
  }

  keyDown(keyEvent) {
    if (keyEvent.which === 13 && keyEvent.ctrlKey) {
      this.editing = false;

      this.set('text', this.editedText);
      this.editedText = null;
    }
  }
}

AlCodeCell.register();
