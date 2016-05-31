/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-code-cell')
class AlCodeCell extends polymer.Base {
  @property({ type: String, notify: true })
  text: string;

  @property({ type: String })
  language: string;

  @property({ type: Boolean, value: false })
  disabled: boolean;

  editing: boolean;

  editedText: string;
  formattedText: string;

  ready() {
    this.editing = false;
  }

  @observe('text')
  textChanged(text) {
    this.$.codeviewer.innerHTML = he.encode(text);
    Prism.highlightElement(this.$.codeviewer);
    this.scopeSubtree(this.$.codeviewer, false);
  }

  getPrismLanguageClass(language) {
    return 'language-' + language;
  }

  @listen('click')
  startEdit() {
    if (!this.disabled && !this.editing) {
      this.editedText = this.text;
      this.editing = true;
    }
  }

  keyDown(keyEvent) {
    if (!this.disabled && keyEvent.which === 13 && keyEvent.ctrlKey) {
      this.editing = false;

      this.set('text', this.editedText);
      this.editedText = null;
    }
  }
}

AlCodeCell.register();
