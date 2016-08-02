import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { PortfolioAngularAppComponent, environment } from './app/';


  enableProdMode();


bootstrap(PortfolioAngularAppComponent, [HTTP_PROVIDERS, JSONP_PROVIDERS]);
