var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlCodeCell = (function (_super) {
    __extends(AlCodeCell, _super);
    function AlCodeCell() {
        _super.apply(this, arguments);
    }
    AlCodeCell.prototype.ready = function () {
        this.editing = false;
    };
    AlCodeCell.prototype.textChanged = function (text) {
        if (text.length > 0) {
            this.$.codeviewer.innerHTML = he.encode(text);
            Prism.highlightElement(this.$.codeviewer);
            this.scopeSubtree(this.$.codeviewer, false);
        }
    };
    AlCodeCell.prototype.getPrismLanguageClass = function (language) {
        return 'language-' + language;
    };
    AlCodeCell.prototype.startEdit = function () {
        if (!this.disabled && !this.editing) {
            this.editedText = this.text;
            this.editing = true;
        }
    };
    AlCodeCell.prototype.keyDown = function (keyEvent) {
        if (!this.disabled && keyEvent.which === 13 && keyEvent.ctrlKey) {
            this.editing = false;
            this.set('text', this.editedText);
            this.editedText = null;
        }
    };
    __decorate([
        property({ type: String, notify: true }), 
        __metadata('design:type', String)
    ], AlCodeCell.prototype, "text", void 0);
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], AlCodeCell.prototype, "language", void 0);
    __decorate([
        property({ type: Boolean, value: false }), 
        __metadata('design:type', Boolean)
    ], AlCodeCell.prototype, "disabled", void 0);
    __decorate([
        observe('text'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AlCodeCell.prototype, "textChanged", null);
    __decorate([
        listen('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AlCodeCell.prototype, "startEdit", null);
    AlCodeCell = __decorate([
        component('al-code-cell'), 
        __metadata('design:paramtypes', [])
    ], AlCodeCell);
    return AlCodeCell;
})(polymer.Base);
AlCodeCell.register();
