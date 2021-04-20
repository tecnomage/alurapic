import { LoadingModule } from './loading.module';

describe('Loading.ModuleModule', () => {
  let loadingModuleModule: LoadingModule;

  beforeEach(() => {
    loadingModuleModule = new LoadingModule();
  });

  it('should create an instance', () => {
    expect(loadingModuleModule).toBeTruthy();
  });
});
