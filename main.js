import { ToyReact, Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return <div>
      <span>hello</span>
      &nbsp;
      <span>world!</span>
      <div>
        {true}
        {this.children}
      </div>
    </div>
  }
  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
  }
}

let a = <MyComponent name="name" id="id"></MyComponent>

ToyReact.render(
  a,
  document.body,
);
