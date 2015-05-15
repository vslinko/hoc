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

module.exports = hoc;
