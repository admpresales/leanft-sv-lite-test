package com.mf;

import com.hp.lft.report.Status;
import com.hp.lft.sdk.SvInfo;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import com.hp.lft.sdk.GeneralLeanFtException;
import com.hp.lft.sdk.web.*;
import com.hp.lft.verifications.*;
import com.hp.lft.report.Reporter;
import com.hp.lft.report.ReportException;
import com.hp.lft.sdk.Desktop;
import unittesting.*;

import java.awt.image.RenderedImage;
import java.text.NumberFormat;
import java.text.ParseException;
import java.util.Locale;

public class LeanFtTest extends UnitTestClassBase {
    Browser browser;
    String isProxy = System.getProperty("useProxy");
    Boolean useProxy = false;
    AOS_Model model;
    BrowserType browserType = BrowserType.CHROME;
    double EXPECTED_PRICE = 179.99;

    @BeforeClass
    public void beforeClass() throws Exception {
        useProxy = (isProxy.equals("true")) ? true : false;
        Reporter.reportEvent("Is this a virtualized service test?", useProxy?"Yes":"No");
        System.out.println("useProxy: " + useProxy);
    }

    @AfterClass
    public void afterClass() throws Exception {
    }

    @BeforeMethod
    public void beforeMethod() throws Exception {
        BrowserDescription browserDescription = new BrowserDescription();
        browserDescription.setType(browserType);

        if (useProxy)
            browserDescription.set("profile_proxy", "http://localhost:9000"); // ()Desktop.getSvInfo().getSvHttpProxy()

        browserDescription.set("profile", true);        // always use a separate browser profile
        browser = BrowserFactory.launch(browserDescription);
        model = new AOS_Model(browser);
    }

    @AfterMethod
    public void afterMethod() throws Exception {
        browser.clearCache();
        browser.deleteCookies();
        windowSync(2000); // just wait a few seconds before closing browser and exiting test
        browser.close();
    }

    @Test
    public void test() throws GeneralLeanFtException, ReportException {
        // Navigate to the website
        browser.navigate("http://nimbusserver.aos.com:8000");
        browser.sync();

        model.AdvantageShoppingPage().LAPTOPSShopNowLink().click();     // Click the laptops category
        browser.sync();
        model.AdvantageShoppingPage().PinkLaptopWebElement().click();       // Select the pink laptop
        browser.sync();
        model.AdvantageShoppingPage().QuantityEditField().setValue("3");    // Set "3" in the amount field
        comparePrice(EXPECTED_PRICE, model.AdvantageShoppingPage().ActualLaptopPriceWebElement());      // Compare price

        model.AdvantageShoppingPage().SaveToCartButton().highlight();       // Highlight the Save to Cart object
        model.AdvantageShoppingPage().SaveToCartButton().click();           // Click the Save to Cart object
    }



    /*
    * Compare an expected price to an actual price - taken from the object passed
    */
    private void comparePrice(double expectedPrice, WebElement webElement) throws GeneralLeanFtException, ReportException {
        webElement.highlight();

        double actualPrice = stringToDouble(webElement.getInnerText().split(" ")[0].split("\\$")[1]);
        RenderedImage screenCapture = webElement.getSnapshot();

        if (actualPrice > 0) {
            Verify.areEqual(expectedPrice, actualPrice, "Price Compare",
                    "Comparing the actual price to what's expected", screenCapture);
        } else {
            Reporter.reportEvent("Cannot parse price" ,
                    "Something happened with parsing the string to double, check the original string " +
                            "(\""+webElement.getInnerText()+"\")",
                    Status.Failed, webElement.getSnapshot());
        }
    }

    /*
    * Format a price to a double.
    * Remove "$" sign and white spaces.
    * Parse the comma (",") - format (x,xxx) to an actual number
    */
    private double stringToDouble (String input)  {
        double retVal = 0;
        Number number;

        NumberFormat format = NumberFormat.getInstance(Locale.US);
        try {
            number = format.parse(input);
            retVal = number.doubleValue();
        } catch (ParseException ex){
            ex.printStackTrace();
            return retVal;
        }
        return retVal;
    }

    private void windowSync(int milliSeconds) {
        try { Thread.sleep(milliSeconds); }
        catch (InterruptedException e) { e.printStackTrace(); }
    }
}