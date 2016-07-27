export class PortfolioAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('portfolio-angular-app h1')).getText();
  }
}
