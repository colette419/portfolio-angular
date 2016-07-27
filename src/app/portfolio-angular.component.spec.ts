import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PortfolioAngularAppComponent } from '../app/portfolio-angular.component';

beforeEachProviders(() => [PortfolioAngularAppComponent]);

describe('App: PortfolioAngular', () => {
  it('should create the app',
      inject([PortfolioAngularAppComponent], (app: PortfolioAngularAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'portfolio-angular works!\'',
      inject([PortfolioAngularAppComponent], (app: PortfolioAngularAppComponent) => {
    expect(app.title).toEqual('portfolio-angular works!');
  }));
});
