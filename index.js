function hoc(WrappedComponent, WrapperComponent) {
  WrapperComponent.WrappedComponent = WrappedComponent;

  WrapperComponent.getWrappedComponent = function () {
    return getWrappedComponent(WrappedComponent);
  };

  return WrapperComponent;
}

function hocDecorator(decorator) {
  return function(WrappedComponent) {
    var WrapperComponent = decorator(WrappedComponent);
    return hoc(WrappedComponent, WrapperComponent);
  };
}

function getWrappedComponent(Component) {
  while (Component.WrappedComponent) {
    Component = Component.WrappedComponent;
  }
  return Component;
}

module.exports = hoc;
module.exports.hocDecorator = hocDecorator;
module.exports.getWrappedComponent = getWrappedComponent;
