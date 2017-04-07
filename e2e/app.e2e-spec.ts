import { ChartWrappingPage } from './app.po';

describe('chart-wrapping App', () => {
  let page: ChartWrappingPage;

  beforeEach(() => {
    page = new ChartWrappingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
