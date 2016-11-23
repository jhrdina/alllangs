/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-main-view')
class AlMainView extends polymer.Base
{
   @property({ type: Object, notify: true })
   languages: Array<AlLanguage>;

   @property({ type: Array, notify: true })
   sections: Array<AlSection>;

   @property({ type: Boolean, value: false })
   disabled: boolean;


   private _onAddConstructBelow(event: Event, detail) {
     console.log(event);
     console.log('sectionIndex:', event.model.sectionIndex);
   }

   private _onDelete(event: Event, detail) {

   }

   private _onAddSectionBelow(event: Event, detail) {

   }

   private _onMoveUp(event: Event, detail) {

   }

   private _onMoveDown(event: Event, detail) {

   }

}

AlMainView.register();
