import { ExeAppPage } from './app.po';

describe('exe-app App', function() {
  let page: ExeAppPage;

  beforeEach(() => {
    page = new ExeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
