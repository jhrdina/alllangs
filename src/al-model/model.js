var Model = (function () {
    function Model() {
    }
    Model.prototype.construct = function (json) {
        this.languages = new LanguagesCollection();
        this.constructs = [];
    };
    return Model;
})();
