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
var AlConstructCell = (function (_super) {
    __extends(AlConstructCell, _super);
    function AlConstructCell() {
        _super.apply(this, arguments);
    }
    AlConstructCell.prototype.addConstructBelowTapped = function () {
        this.fire('add-construct-below');
    };
    AlConstructCell.prototype.deleteTapped = function () {
        this.fire('delete');
    };
    AlConstructCell.prototype.addSectionBelowTapped = function () {
        this.fire('add-section-below');
    };
    AlConstructCell.prototype.moveUpTapped = function () {
        this.fire('move-up');
    };
    AlConstructCell.prototype.moveDownTapped = function () {
        this.fire('move-down');
    };
    __decorate([
        property({ type: String, notify: true }), 
        __metadata('design:type', String)
    ], AlConstructCell.prototype, "text", void 0);
    __decorate([
        property({ type: Boolean, value: false }), 
        __metadata('design:type', Boolean)
    ], AlConstructCell.prototype, "disabled", void 0);
    AlConstructCell = __decorate([
        component('al-construct-cell'), 
        __metadata('design:paramtypes', [])
    ], AlConstructCell);
    return AlConstructCell;
})(polymer.Base);
AlConstructCell.register();
