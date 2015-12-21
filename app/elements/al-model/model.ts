
class Model {
  languages: LanguagesCollection;
  constructs: Array<Construct>;

  construct(json: string) {
    this.languages = new LanguagesCollection();
    this.constructs = [];
  }
}
