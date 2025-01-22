import { Builder, By } from 'selenium-webdriver';
import * as chai from 'chai'; // Правильный импорт
const expect = chai.expect;

describe('Swag Labs - Login Test', function () {
    this.timeout(30000); // Увеличение времени ожидания для тестов
    let driver;

    // Выполняется перед тестами: инициализация браузера
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Выполняется после тестов: закрытие браузера
    after(async () => {
        await driver.quit();
    });

    it('should login with valid credentials', async () => {
        // Открываем сайт
        await driver.get('https://www.saucedemo.com/');

        // Вводим логин и пароль
        const usernameField = await driver.findElement(By.id('user-name'));
        const passwordField = await driver.findElement(By.id('password'));
        const loginButton = await driver.findElement(By.id('login-button'));

        await usernameField.sendKeys('standard_user');
        await passwordField.sendKeys('secret_sauce');
        await loginButton.click();

        // Задержка, чтобы увидеть результат
        await driver.sleep(3000);

        // Проверяем, что пользователь оказался на странице товаров
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('/inventory.html');
    });
});


