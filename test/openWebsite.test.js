import { Builder } from 'selenium-webdriver';
import * as chai from 'chai'; // Импортируем весь модуль chai
const expect = chai.expect;

describe('Open Website Test', function () {
    this.timeout(30000); // Увеличение времени ожидания для тестов
    let driver;

    // Выполняется перед тестами: инициализация браузера
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Выполняется после тестов: задержка перед закрытием браузера
    after(async () => {
        // Задержка на 5 секунд (5000 миллисекунд)
        await new Promise(resolve => setTimeout(resolve, 5000));
        await driver.quit();
    });

    it('should open the Swag Labs website', async () => {
        await driver.get('https://www.saucedemo.com/');
        const title = await driver.getTitle();
        expect(title).to.include('Swag Labs'); // Проверка заголовка страницы
    });
});
