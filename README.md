# Higher-order Components Helpers

Higher-order component is awesome way to extend components functionality.
But higher-order components have one nasty problem — we have no access to wrapped component.
This small module tries to solve that problem.

## API

### ES6

```js
import {hocDecorator} from 'hoc';

const smartComponentDecorator = hocDecorator(Component => class SmartComponent {
  render() {
    return <Component />;
  }
});

@smartComponentDecorator
class DumbComponent {
  render() {/* */}
}

console.log(DumbComponent.name); // SmartComponent
console.log(DumbComponent.getWrappedComponent().name); // DumbComponent
```

### ES5

```js
var hoc = require('hoc');

var DumbComponent = React.createClass({
  render: function() {/* */}
});

var SmartComponent = hoc(DumbComponent, React.createClass({
  render: function() {
    return <DumbComponent />;
  }
}))

console.log(SmartComponent.displayName); // SmartComponent
console.log(SmartComponent.getWrappedComponent().displayName); // DumbComponent
```
