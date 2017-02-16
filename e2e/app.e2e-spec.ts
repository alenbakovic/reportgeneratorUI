import { ReportgeneratorUIPage } from './app.po';

describe('reportgenerator-ui App', function() {
  let page: ReportgeneratorUIPage;

  beforeEach(() => {
    page = new ReportgeneratorUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
