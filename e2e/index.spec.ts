import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlSurvey = "http://localhost:3000/survey";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async ({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('The  Sleep Review');
    })

    test('The meta tag', async ({ page }) => {
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlHome)

        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "GG")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Home Page')

        const metaDescriptionThree = page.locator('meta[property="og:description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'Sleep Efficiency')
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.png')
    })
})

test.describe('Main area', () => {
    test('Paragraph tag', async ({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('p')).toContainText('According to the National Sleep Foundation, high school students ages 14-17 need about eight to 10 hours of sleep each night. How do you know how much sleep you need within this range?');
    })

    test('h2 Tag', async ({ page }) => {
        await page.goto(urlHome)

        const paragraphText = page.getByRole('paragraph');
        await expect(page.locator('h2')).toContainText('Consequences of sleep deprivation')
    })

    test('Should contain an unordered list of information', async ({ page }) => {
        await page.goto(urlHome)
        await expect(page.locator('ul > li')).toContainText(["Daytime sleepiness and fatigue", "Irritability and short temper", "Mood changes", "Trouble coping with stress", "Difficulty focusing, concentrating, and remembering", "Brain fog"]);
    })

})
