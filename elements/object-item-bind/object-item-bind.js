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
var ObjectItemBind = (function (_super) {
    __extends(ObjectItemBind, _super);
    function ObjectItemBind() {
        _super.apply(this, arguments);
    }
    ObjectItemBind.prototype.bindValue = function () {
        return this.key;
    };
    __decorate([
        property({ type: Object, notify: true }), 
        __metadata('design:type', Object)
    ], ObjectItemBind.prototype, "bindObject", void 0);
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], ObjectItemBind.prototype, "key", void 0);
    __decorate([
        property({ type: String, notify: true, readOnly: true, value: "test" }), 
        __metadata('design:type', String)
    ], ObjectItemBind.prototype, "bindValue", void 0);
    __decorate([
        property({ type: Object, computed: 'bindObject.*,key', notify: true }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ObjectItemBind.prototype, "bindValue", null);
    ObjectItemBind = __decorate([
        component('object-item-bind'), 
        __metadata('design:paramtypes', [])
    ], ObjectItemBind);
    return ObjectItemBind;
})(polymer.Base);
ObjectItemBind.register();
