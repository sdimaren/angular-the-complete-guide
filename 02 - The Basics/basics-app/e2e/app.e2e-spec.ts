import { BasicsAppPage } from './app.po';

describe('basics-app App', () => {
  let page: BasicsAppPage;

  beforeEach(() => {
    page = new BasicsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
