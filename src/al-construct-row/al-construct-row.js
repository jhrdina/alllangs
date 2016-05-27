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
var AlConstructRow = (function (_super) {
    __extends(AlConstructRow, _super);
    function AlConstructRow() {
        _super.apply(this, arguments);
    }
    AlConstructRow.prototype.modelChanged = function () {
        var that = this;
        this.languageSolutions = this.languages.map(function (value, index, array) {
            return {
                text: that.construct.solutions[value.id] || '',
                prism: value.prism
            };
        });
    };
    __decorate([
        property({ type: Object, notify: true }), 
        __metadata('design:type', Construct)
    ], AlConstructRow.prototype, "construct", void 0);
    __decorate([
        property({ type: Array }), 
        __metadata('design:type', Array)
    ], AlConstructRow.prototype, "languages", void 0);
    __decorate([
        property({ type: Boolean, value: false }), 
        __metadata('design:type', Boolean)
    ], AlConstructRow.prototype, "disabled", void 0);
    __decorate([
        observe('languages.*,construct.*'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AlConstructRow.prototype, "modelChanged", null);
    AlConstructRow = __decorate([
        component('al-construct-row'), 
        __metadata('design:paramtypes', [])
    ], AlConstructRow);
    return AlConstructRow;
})(polymer.Base);
AlConstructRow.register();
