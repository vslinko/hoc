function hoc(WrappedComponent, WrapperComponent) {
  WrapperComponent.WrappedComponent = WrappedComponent;

  WrapperComponent.getWrappedComponent = function () {
    if (WrappedComponent.getWrappedComponent) {
      return WrappedComponent.getWrappedComponent();
    } else {
      return WrappedComponent;
    }
  };

  return WrapperComponent;
}

function hocDecorator(decorator) {
  return function(WrappedComponent) {
    var WrapperComponent = decorator(WrappedComponent);
    return hoc(WrappedComponent, WrapperComponent);
  };
}

module.exports = hoc;
module.exports.hocDecorator = hocDecorator;
