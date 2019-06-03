<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<applicationModel>
    <name>Application Model</name>
    <className>AOS_Model</className>
    <objects>
        <object type="Page" technology="Web">
            <name> Advantage Shopping</name>
            <codeName>AdvantageShoppingPage_old</codeName>
            <description></description>
            <identification/>
            <children>
                <object type="Link" technology="Web">
                    <name>SPECIAL OFFER</name>
                    <codeName>SPECIALOFFERLink</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="InnerText" type="string" isRegExp="false">SPECIAL OFFER</property>
                            <property name="TagName" type="string" isRegExp="false">A</property>
                        </properties>
                    </identification>
                </object>
                <object type="Button" technology="Web">
                    <name>see_offer_btn</name>
                    <codeName>SeeOfferBtnButton</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ButtonType" type="string" isRegExp="false">submit</property>
                            <property name="Name" type="string" isRegExp="false">SEE OFFER</property>
                            <property name="TagName" type="string" isRegExp="false">BUTTON</property>
                        </properties>
                    </identification>
                </object>
                <object type="WebElement" technology="Web">
                    <name>$449.99 SOLD OUT </name>
                    <codeName>PriceWebElement</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ClassName" type="string" isRegExp="false">roboto-thin screen768 ng-binding</property>
                            <property name="InnerText" type="string" isRegExp="true">\$\d.* SOLD OUT </property>
                            <property name="TagName" type="string" isRegExp="false">H2</property>
                        </properties>
                    </identification>
                </object>
                <object type="WebElement" technology="Web">
                    <name>bunny</name>
                    <codeName>RedBunnyWebElement</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ClassName" type="string" isRegExp="false">bunny productColor ng-scope RED</property>
                            <property name="InnerText" type="string" isRegExp="false"></property>
                            <property name="TagName" type="string" isRegExp="false">SPAN</property>
                        </properties>
                    </identification>
                </object>
            </children>
        </object>
        <object type="Page" technology="Web">
            <name>Advantage Shopping</name>
            <codeName>AdvantageShoppingPage</codeName>
            <description></description>
            <identification/>
            <children>
                <object type="WebElement" technology="Web">
                    <name>WebElement</name>
                    <codeName>PlusWebElement</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ClassName" type="string" isRegExp="false">plus</property>
                            <property name="InnerText" type="string" isRegExp="false"></property>
                            <property name="OuterHTML" type="string" isRegExp="false">&lt;div class="plus" increment-value-attr="+"&gt;&lt;/div&gt;</property>
                            <property name="TagName" type="string" isRegExp="false">DIV</property>
                        </properties>
                    </identification>
                </object>
                <object type="Link" technology="Web">
                    <name>LAPTOPS Shop Now </name>
                    <codeName>LAPTOPSShopNowLink</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="InnerText" type="string" isRegExp="false">LAPTOPS Shop Now </property>
                            <property name="TagName" type="string" isRegExp="false">DIV</property>
                        </properties>
                    </identification>
                </object>
                <object type="WebElement" technology="Web">
                    <name>HP Stream - 11-d020nr Laptop</name>
                    <codeName>PinkLaptopWebElement</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="InnerText" type="string" isRegExp="false">HP Stream - 11-d020nr Laptop</property>
                            <property name="TagName" type="string" isRegExp="false">A</property>
                        </properties>
                    </identification>
                </object>
                <object type="WebElement" technology="Web">
                    <name>HP STREAM - 11-D020NR LAPTOP </name>
                    <codeName>HPSTREAM11D020NRLAPTOPWebElement</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ClassName" type="string" isRegExp="false">roboto-regular screen768 ng-binding</property>
                            <property name="InnerText" type="string" isRegExp="false">HP STREAM - 11-D020NR LAPTOP </property>
                            <property name="TagName" type="string" isRegExp="false">H1</property>
                        </properties>
                    </identification>
                </object>
                <object type="WebElement" technology="Web">
                    <name>$179.99 SOLD OUT </name>
                    <codeName>ActualLaptopPriceWebElement</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ClassName" type="string" isRegExp="false">roboto-thin screen768 ng-binding</property>
                            <property name="InnerText" type="string" isRegExp="true">\$\d.* SOLD OUT </property>
                            <property name="TagName" type="string" isRegExp="false">H2</property>
                        </properties>
                    </identification>
                </object>
                <object type="EditField" technology="Web">
                    <name>quantity</name>
                    <codeName>QuantityEditField</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="Name" type="string" isRegExp="false">quantity</property>
                            <property name="TagName" type="string" isRegExp="false">INPUT</property>
                            <property name="Type" type="string" isRegExp="false">text</property>
                        </properties>
                    </identification>
                </object>
                <object type="Button" technology="Web">
                    <name>save_to_cart</name>
                    <codeName>SaveToCartButton</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ButtonType" type="string" isRegExp="false">submit</property>
                            <property name="Name" type="string" isRegExp="false">ADD TO CART</property>
                            <property name="TagName" type="string" isRegExp="false">BUTTON</property>
                        </properties>
                    </identification>
                </object>
                <object type="WebElement" technology="Web">
                    <name>BlueBunny</name>
                    <codeName>BlueBunnyWebElement</codeName>
                    <description></description>
                    <identification>
                        <properties>
                            <property name="ClassName" type="string" isRegExp="false">bunny productColor ng-scope BLUE colorSelected</property>
                            <property name="InnerText" type="string" isRegExp="false"></property>
                            <property name="TagName" type="string" isRegExp="false">SPAN</property>
                        </properties>
                    </identification>
                </object>
            </children>
        </object>
    </objects>
</applicationModel>
