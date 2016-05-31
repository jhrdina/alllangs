/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

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
   languageSolutionsLock: boolean;

   @observe('languages.*,construct.*')
   modelChanged(lang, cons) {
     var that = this;
     this.languageSolutionsLock = true;
     // Create cell for each language
     this.languageSolutions = this.languages.map((value: Language, index: number, array: Language[]) => {
       return {
         text: that.construct.solutions[value.id] || '',
         prism: value.prism
       };
     });
     this.languageSolutionsLock = false;
   }

   private _onSolutionChanged(e): void {
     if (!this.languageSolutionsLock) {
       var languageIndex = e.model.index;
       var languageId = this.languages[languageIndex].id;

       if (e.model.solution.text) {
         this.set('construct.solutions.' + languageId, e.model.solution.text);
       } else {
         delete this.construct.solutions[languageId];
         this.notifyPath('construct.solutions.' + languageId, undefined);
       }
     }
   }
}

AlConstructRow.register();
