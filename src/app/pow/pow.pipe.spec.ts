import { PowPipe } from "../pow.pipe";

describe("PowPipe", () => {

  let pipe: PowPipe;

  beforeEach(() => {
    pipe = new PowPipe();
  });

  it(`should create instance`, () => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform).toBeDefined();
  })

});
