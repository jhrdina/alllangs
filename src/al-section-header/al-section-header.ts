/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-section-header')
class AlSectionHeader extends polymer.Base
{
   @property({ type: String })
   text: string;
}

AlSectionHeader.register();
