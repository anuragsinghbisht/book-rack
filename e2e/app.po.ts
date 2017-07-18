import { browser, by, element } from 'protractor';

export class BookRackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root main div')).getText();
  }
}
