var LanguagesCollection = (function () {
    function LanguagesCollection(languages) {
        if (!languages)
            return;
        for (var i = 0; i < languages.length; i++) {
            if (!(languages[i] instanceof Language)) {
                this.languages.push(new Language(languages[i]));
            }
            else {
                this.languages.push(languages[i]);
            }
        }
    }
    LanguagesCollection.prototype.push = function (language) {
        this.languages.push(language);
    };
    LanguagesCollection.prototype.getById = function (languageId) {
        for (var i = 0; i < this.languages.length; i++) {
            if (this.languages[i].id === languageId)
                return this.languages[i];
        }
    };
    LanguagesCollection.prototype.asArray = function () {
        return this.languages;
    };
    return LanguagesCollection;
})();
