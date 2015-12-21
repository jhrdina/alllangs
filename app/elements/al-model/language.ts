
class Language {
  id: string;
  name: string;
  prism: string;

  constructor(object?: any) {
    if (!object) return;

    this.id = object.id;
    this.name = object.name;
    this.prism = object.prism;
  }
}
