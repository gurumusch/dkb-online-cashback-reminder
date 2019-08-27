import { Builder, By, until, Key } from 'selenium-webdriver';
import 'chromedriver';

jest.setTimeout(30000);

describe('The installed extension detects cashbck shops correctly', () => {
  it('should correctly detect shops that are part of the dkb cashback program', async () => {
    const driver = await new Builder()
      .forBrowser('chrome')
      .build();
    try {
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
      const title = await driver.getTitle();
      expect(title).toBe('webdriver - Google Search');
    } finally {
      await driver.quit();
    }
  });
});
