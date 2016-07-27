import { PortfolioAngularPage } from './app.po';

describe('portfolio-angular App', function() {
  let page: PortfolioAngularPage;

  beforeEach(() => {
    page = new PortfolioAngularPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('portfolio-angular works!');
  });
});
