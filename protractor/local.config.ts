import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
  SELENIUM_PROMISE_MANAGER: false,
};
