package Grupo6_TMingueso.Tingeso.model;

import java.net.URL;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Platform;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

public class seleniumTest {

    private WebDriver driver;

    @Before
    public void setUp() throws Exception,MalformedURLException{

        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        capabilities.setBrowserName("chrome");
        capabilities.setPlatform(Platform.LINUX);
        driver = new RemoteWebDriver(new URL("http://192.168.99.100:4444/wd/hub"), capabilities);
        //driver = new FirefoxDriver();
        //driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }

    @Test
    public void test_1_titulopagina() throws Exception  {

        boolean iguales = false;
        driver.get("http://localhost:1919/#!/index");
        System.out.println(driver.getTitle());
        if (driver.getTitle().equals("Home"))
        {
            iguales = true;
            System.out.println("Son iguales");
        }
        else
        {
            System.out.println("No son iguales");
        }
    }

    /*@Test
    public void test_2_() throws Exception  {

        boolean iguales = false;
        driver.get("http://localhost:1919/#!/index");
        System.out.println(driver.getTitle());
        if (driver.getTitle().equals("Home"))
        {
            iguales = true;
            System.out.println("Son iguales");
        }
        else
        {
            System.out.println("No son iguales");
        }
    }*/

    @After
    public void tearDown() throws Exception {
        this.driver.quit();
    }
}
