import { BookRackPage } from './app.po';

describe('book-rack App', () => {
  let page: BookRackPage;

  beforeEach(() => {
    page = new BookRackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Counter :: 0');
  });
});
