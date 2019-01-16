import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should inputReference welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to changeDetection!');
  });
});
