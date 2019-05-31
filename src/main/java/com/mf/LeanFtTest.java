package com.mf;

import com.hp.lft.report.Status;
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

import unittesting.*;

import java.awt.image.RenderedImage;
import java.text.NumberFormat;
import java.text.ParseException;
import java.util.Locale;

public class LeanFtTest extends UnitTestClassBase {
    Browser browser;
    Boolean useProxy = true;
    String proxyAddress = "http://localhost:9000";
    AOS_Model model;
    BrowserType browserType = BrowserType.FIREFOX;

    @BeforeClass
    public void beforeClass() throws Exception {
    }

    @AfterClass
    public void afterClass() throws Exception {
    }

    @BeforeMethod
    public void beforeMethod() throws Exception {
        BrowserDescription browserDescription = new BrowserDescription.Builder().type(browserType).build();
        if (useProxy)
            browserDescription.set("profile_proxy", proxyAddress);
        browser = BrowserFactory.launch(browserDescription);
        model = new AOS_Model(browser);
    }

    @AfterMethod
    public void afterMethod() throws Exception {
        browser.close();

    }

    @Test
    public void test() throws GeneralLeanFtException, InterruptedException, ReportException {
        browser.navigate("http://nimbusserver.aos.com:8000");
        browser.sync();

        model.AdvantageShoppingPage().SPECIALOFFERLink().click();
        model.AdvantageShoppingPage().SeeOfferBtnButton().click();
        browser.sync();

        comparePrice(449.99, model.AdvantageShoppingPage().PriceWebElement());

        Thread.sleep(5000); // just wait for 5 seconds
    }

    private void comparePrice(double expectedPrice, WebElement webElement) throws GeneralLeanFtException, ReportException {
        webElement.highlight();

        double actualPrice = stringToDouble(webElement.getInnerText().split(" ")[0].split("\\$")[1]);
        RenderedImage screenCapture = webElement.getSnapshot();

        if (actualPrice > 0) {
            Verify.areEqual(expectedPrice, actualPrice, "Price Compare",
                    "Comparing the actual price to what's expected", screenCapture);
        } else {
            Reporter.reportEvent("Cannot parse price" ,
                    "Something happened with parsing the string to double, check the original string (\""+webElement.getInnerText()+"\")",
                    Status.Failed, webElement.getSnapshot());
        }
    }

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
        } finally { return retVal; }
    }
}