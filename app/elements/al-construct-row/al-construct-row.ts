/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-construct-row')
class AlConstructRow extends polymer.Base
{
   @property({ type: Object, notify: true })
   construct: Construct;

   @property({ type: Array })
   languages: Array<Language>;

   @property({ type: Boolean, value: false })
   disabled: boolean;

   languageSolutions: Array<any>;

   @observe('languages.*,construct.*')
   modelChanged() {
     var that = this;
     this.languageSolutions = this.languages.map((value: Language, index: number, array: Language[]) => {
       return {
         text: that.construct.solutions[value.id] || '',
         prism: value.prism
       };
     });
   }
}

AlConstructRow.register();
