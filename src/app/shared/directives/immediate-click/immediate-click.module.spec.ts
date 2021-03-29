import { ImmediateClick } from './immediate-click.module';

describe('ImmediateClick.ModuleModule', () => {
  let immediateClickModuleModule: ImmediateClick;

  beforeEach(() => {
    immediateClickModuleModule = new ImmediateClick();
  });

  it('should create an instance', () => {
    expect(immediateClickModuleModule).toBeTruthy();
  });
});
