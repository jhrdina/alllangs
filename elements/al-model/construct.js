var Construct = (function () {
    function Construct() {
    }
    Construct.prototype.getSolutionForLanguage = function (languageId) {
        return this.solutions[languageId];
    };
    Construct.prototype.setSolutionForLanguage = function (languageId, solution) {
        this.solutions[languageId] = solution;
    };
    return Construct;
})();
