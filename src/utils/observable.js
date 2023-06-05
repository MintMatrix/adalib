
export var Observable = /** @class */ (function () {
  function Observable(value) {
      this.observers = new Array();
      this.value = value;
  }
  Observable.prototype.subscribe = function (subscriber) {
      this.observers.push(subscriber);
  };
  Observable.prototype.unsubscribe = function (subscriber) {
      this.observers = this.observers.filter(function (observer) { return observer !== subscriber; });
  };
  Observable.prototype.get = function () {
      return this.value;
  };
  Observable.prototype.set = function (value) {
      if (this.value === value)
          return;
      this.value = value;
      for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
          var observer = _a[_i];
          observer(this.value);
      }
  };
  return Observable;
}());

export var WalletNotCip30CompatibleError = /** @class */ (function (_super) {
  __extends(WalletNotCip30CompatibleError, _super);
  function WalletNotCip30CompatibleError(walletname) {
      var _this = this;
      var message = "It seems that the API of ".concat(capitalize(walletname), " is not cip30 compatible.");
      _this = _super.call(this, message) || this;
      _this.name = 'WalletNotCip30CompatibleError';
      return _this;
  }
  return WalletNotCip30CompatibleError;
}(Error));

