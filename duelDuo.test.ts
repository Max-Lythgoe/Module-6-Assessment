
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('Draw button, title, and see all button', () => {
test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('clicking draw button displays correct div', async () => {
    await driver.findElement(By.id('draw')).click()
    const displayed = await driver.findElement(By.id('choices')).isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('clicking see all bots button will display all the bots', async () => {
    await driver.findElement(By.id('see-all')).click()
    const displayed = await driver.findElement(By.id('all-bots')).isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

})