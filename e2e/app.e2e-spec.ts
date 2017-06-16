import { ShoppingAndRecepiePage } from './app.po';

describe('shopping-and-recepie App', () => {
  let page: ShoppingAndRecepiePage;

  beforeEach(() => {
    page = new ShoppingAndRecepiePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
