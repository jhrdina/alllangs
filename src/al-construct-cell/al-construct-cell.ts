/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-construct-cell')
class AlConstructCell extends polymer.Base {
  @property({ type: String })
  text: String;

  @property({ type: Boolean, value: false })
  disabled: boolean;

  addConstructBelowTapped() {
    this.fire('add-construct-below');
  }

  deleteTapped() {
    this.fire('delete');
  }

  addSectionBelowTapped() {
    this.fire('add-section-below');
  }

  moveUpTapped() {
    this.fire('move-up');
  }

  moveDownTapped() {
    this.fire('move-down');
  }
}

AlConstructCell.register();
