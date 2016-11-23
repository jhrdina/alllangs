/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

interface AlModel {
  languages: AlLanguage[];
  sections: AlSection[];
}

interface AlLanguage {
  id: string;
  name: string;
  prism: string;
}

interface AlSection {
  title: string;
  constructs: AlConstruct[];
}

interface AlConstruct {
  title: string;
  solutions: { [languageId: string]: string };
}

@component('al-storage')
class AlStorage extends polymer.Base {

  @property({ type: Object, notify: true })
  model: AlModel;

  _onNewData(e) {
    this.model = e.detail.value;
  }


}

AlStorage.register();
