/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-main-view')
class AlMainView extends polymer.Base
{
   @property({ type: Object, notify: true })
   languages: Array<Language>;

   @property({ type: Array, notify: true })
   sections: Array<Section>;

   @property({ type: Boolean, value: false })
   disabled: boolean;
}

AlMainView.register();
