/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-app')
class AlApp extends polymer.Base
{
  model: any;

  _onNewData(e) {
    this.model = e.detail.value;
  }

  _onFileSelected(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.addEventListener('load', e => {
      var data: any = e.target;
      this.model = JSON.parse(data.result);
    });

    reader.readAsText(file);
  }

  exportTapped() {
    var data = JSON.stringify(this.model, null, 2)
    this.download('data.json', data);
  }

  download(filename: string, data: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', filename);

    element.style.display = 'none';

    // TODO: Append to local DOM
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  importTapped() {
    this.$.file.click();
  }
}

AlApp.register();
