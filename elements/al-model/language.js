var Language = (function () {
    function Language(object) {
        if (!object)
            return;
        this.id = object.id;
        this.name = object.name;
        this.prism = object.prism;
    }
    return Language;
})();
