class LanguagesCollection {

  private languages: Array<Language>;

  constructor(languages?: Array<any>) {
    if (!languages)
      return;

    for (let i = 0; i < languages.length; i++) {
        if (!(languages[i] instanceof Language)) {
          this.languages.push(new Language(languages[i]));
        } else {
          this.languages.push(languages[i]);
        }
    }
  }

  push(language: Language): void {
    this.languages.push(language);
  }

  getById(languageId: string): Language {
    for (let i = 0; i < this.languages.length; i++) {
        if (this.languages[i].id === languageId)
          return this.languages[i];
    }
  }

  asArray(): Array<Language> {
    return this.languages;
  }
}
