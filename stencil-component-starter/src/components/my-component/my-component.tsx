import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {format} from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Test event
   */
  @Event() testEvent: EventEmitter<string>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  componentWillRender() {
    this.testEvent.emit("componentWillRender");
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
