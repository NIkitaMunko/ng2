import { ColorDirective } from "./color.directive";

describe('ColorDirective', () => {

  let directive: ColorDirective;

  beforeEach(() => {
    directive = new ColorDirective();
  })

  it(`s c i`, () => {
    expect(directive).toBeTruthy();
  })

})
