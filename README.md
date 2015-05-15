# Higher-order Components Helpers

Higher-order component is awesome way to extend components functionality.
But higher-order components have one nasty problem — we have no access to wrapped component.
This small module tries to solve that problem.

## FAQ

> Why do you need access to wrapped component?

I'm using ES6 decorators to wrap my "dumb" components.
Sometimes I want to render pure "dumb" components without any decorators.
This module gives me access to pure component.

> What is "dumb" component?

Please read [this article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

## API

### ES6

```js
import {hocDecorator, getWrappedComponent} from 'hoc';

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
console.log(getWrappedComponent(DumbComponent).name); // DumbComponent
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
console.log(hoc.getWrappedComponent(SmartComponent).displayName); // DumbComponent
```
