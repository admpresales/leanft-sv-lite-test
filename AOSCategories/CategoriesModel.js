import * as sv from "sv-vsl";

import {CategoriesInterface} from "./CategoriesInterface.js";

export class CategoriesModel extends sv.ServiceModel {

    constructor(srvc: CategoriesInterface) {
        super(srvc);
        this.srvc = srvc;
    }

    @sv.scenario
    AOSCategories_Categories() {
        const userAgent = sv.svVar("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36").setFinal();
        const expires = sv.svVar("0").setFinal();
        const attributeId = sv.svVar(13).setFinal();
        const cacheControl = sv.svVar("no-store").setFinal();
        const attributeid0 = sv.svVar(14).setFinal();
        const attributeid1 = sv.svVar(17).setFinal();
        const accessControlAllowCredentials = sv.svVar("true").setFinal();
        const attributeid2 = sv.svVar(11).setFinal();
        const categoryName = sv.svVar("TABLETS").setFinal();
        const acceptLanguage = sv.svVar("en-US,en;q=0.9").setFinal();
        const acceptEncoding = sv.svVar("gzip, deflate").setFinal();
        const attributeid3 = sv.svVar(15).setFinal();
        const proxyConnection = sv.svVar("keep-alive").setFinal();
        const categoryId = sv.svVar(2).setFinal();
        const contentType = sv.svVar("application/json;charset=UTF-8").setFinal();
        const attributeid4 = sv.svVar(7).setFinal();
        const categoryid0 = sv.svVar(4).setFinal();
        const categoryname0 = sv.svVar("SPEAKERS").setFinal();
        const categoryname1 = sv.svVar("HEADPHONES").setFinal();
        const attributeid5 = sv.svVar(16).setFinal();
        const categoryname2 = sv.svVar("MICE").setFinal();
        const accept = sv.svVar("application/json, text/plain, */*").setFinal();
        const origin = sv.svVar("http://nimbusserver.aos.com:8000");
        const categoryid1 = sv.svVar(3).setFinal();
        const referer = sv.svVar("http://nimbusserver.aos.com:8000/").setFinal();
        const attributeid6 = sv.svVar(8).setFinal();
        const attributeid7 = sv.svVar(12).setFinal();
        const contentEncoding = sv.svVar("gzip").setFinal();
        const categoryid2 = sv.svVar(5).setFinal();
        const attributeid8 = sv.svVar(10).setFinal();
        const categoryid3 = sv.svVar(1).setFinal();
        const vary = sv.svVar("Origin,Accept-Encoding").setFinal();
        const categoryname3 = sv.svVar("LAPTOPS").setFinal();
        const attributeid9 = sv.svVar(6).setFinal();
        const attributeid10 = sv.svVar(9).setFinal();
        const httpHeaders0 = sv.svVar({"Origin":origin,"Accept":accept,"User-Agent":userAgent,"Referer":referer,"Accept-Encoding":acceptEncoding,"Accept-Language":acceptLanguage,"Proxy-Connection":proxyConnection});
        const httpHeaders1 = sv.svVar({"Origin":origin,"Accept":accept,"User-Agent":userAgent,"Referer":referer,"Accept-Encoding":acceptEncoding,"Accept-Language":acceptLanguage,"Proxy-Connection":proxyConnection});
        const httpHeaders2 = sv.svVar({"Access-Control-Allow-Credentials":accessControlAllowCredentials,"Access-Control-Allow-Origin":origin,"Vary":vary,"Expires":expires,"Cache-Control":cacheControl,"Content-Type":contentType,"Content-Encoding":contentEncoding,"Date":"Fri, 31 May 2019 21:10:50 GMT"});
        const httpHeaders3 = sv.svVar({"Access-Control-Allow-Credentials":accessControlAllowCredentials,"Access-Control-Allow-Origin":origin,"Vary":vary,"Expires":expires,"Cache-Control":cacheControl,"Content-Type":contentType,"Content-Encoding":contentEncoding,"Date":"Fri, 31 May 2019 21:10:53 GMT"});
        const httpHeaders4 = sv.svVar({"Origin":origin,"Accept":accept,"User-Agent":userAgent,"Referer":referer,"Accept-Encoding":acceptEncoding,"Accept-Language":acceptLanguage,"Proxy-Connection":proxyConnection});
        const httpHeaders5 = sv.svVar({"Access-Control-Allow-Credentials":accessControlAllowCredentials,"Access-Control-Allow-Origin":origin,"Vary":vary,"Expires":expires,"Cache-Control":cacheControl,"Content-Type":contentType,"Content-Encoding":contentEncoding,"Date":"Fri, 31 May 2019 21:10:53 GMT"});
        const msg0 = sv.svVar(this.importExternal("AOSCategories_Categories0.json"));
        sv.svAssign(msg0[3].products[2].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[0].products[6].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[5].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[4].products[3].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[0].products[2].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[1].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[1].productId, attributeid8);
        sv.svAssign(msg0[0].products[0].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[1].products[3].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[2].products[1].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].products[2].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[1].categoryId, categoryid3);
        sv.svAssign(msg0[1].products[2].productId, attributeid7);
        sv.svAssign(msg0[3].products[0].categoryId, categoryid0);
        sv.svAssign(msg0[0].products[5].colors[3].inStock, attributeid8);
        sv.svAssign(msg0[0].products[10].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[4].products[7].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[1].products[2].categoryId, categoryId);
        sv.svAssign(msg0[2].promotedProduct.id, attributeid5);
        sv.svAssign(msg0[4].products[1].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[5].productId, categoryId);
        sv.svAssign(msg0[0].products[4].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[1].categoryName, categoryname1);
        sv.svAssign(msg0[1].products[2].colors[3].inStock, attributeid8);
        sv.svAssign(msg0[3].products[3].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[4].products[6].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[1].categoryId, categoryId);
        sv.svAssign(msg0[0].products[5].categoryId, categoryid3);
        sv.svAssign(msg0[3].products[4].categoryId, categoryid0);
        sv.svAssign(msg0[0].products[7].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[0].products[8].productId, categoryid0);
        sv.svAssign(msg0[0].products[8].categoryId, categoryid3);
        sv.svAssign(msg0[4].products[8].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[6].colors[4].inStock, attributeid8);
        sv.svAssign(msg0[1].products[2].colors[7].inStock, attributeid8);
        sv.svAssign(msg0[1].products[0].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[0].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[2].products[1].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[4].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[1].products[2].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[3].products[3].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].products[1].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[0].products[7].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[1].colors[3].inStock, attributeid8);
        sv.svAssign(msg0[3].products[6].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[4].products[4].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[0].products[0].productId, attributeid10);
        sv.svAssign(msg0[0].products[3].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[2].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[0].categoryId, categoryid3);
        sv.svAssign(msg0[1].products[1].productId, attributeId);
        sv.svAssign(msg0[2].products[2].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].products[3].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[1].products[1].categoryId, categoryId);
        sv.svAssign(msg0[4].products[0].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[6].colors[3].inStock, attributeid8);
        sv.svAssign(msg0[4].products[8].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[0].products[4].productId, categoryid3);
        sv.svAssign(msg0[2].products[2].categoryId, categoryid1);
        sv.svAssign(msg0[1].products[2].colors[6].inStock, attributeid8);
        sv.svAssign(msg0[2].categoryId, categoryid1);
        sv.svAssign(msg0[0].products[4].categoryId, categoryid3);
        sv.svAssign(msg0[3].products[3].categoryId, categoryid0);
        sv.svAssign(msg0[0].products[5].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[3].products[4].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[4].products[2].colors[3].inStock, attributeid8);
        sv.svAssign(msg0[4].products[7].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[4].products[4].categoryId, categoryid2);
        sv.svAssign(msg0[2].categoryName, categoryName);
        sv.svAssign(msg0[0].products[7].productId, attributeid2);
        sv.svAssign(msg0[0].products[7].categoryId, categoryid3);
        sv.svAssign(msg0[3].products[6].categoryId, categoryid0);
        sv.svAssign(msg0[4].products[7].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[0].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[4].products[0].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[1].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[4].products[4].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[5].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[1].products[3].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[3].products[4].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].products[2].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[2].products[2].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[0].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[1].products[0].productId, attributeid3);
        sv.svAssign(msg0[0].products[4].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[1].products[2].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[3].products[3].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[4].products[1].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[1].products[0].categoryId, categoryId);
        sv.svAssign(msg0[2].products[1].productId, attributeid1);
        sv.svAssign(msg0[0].products[9].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[1].products[2].colors[5].inStock, attributeid8);
        sv.svAssign(msg0[0].promotedProduct.id, categoryid1);
        sv.svAssign(msg0[0].products[3].productId, attributeid9);
        sv.svAssign(msg0[2].products[1].categoryId, categoryid1);
        sv.svAssign(msg0[3].categoryId, categoryid0);
        sv.svAssign(msg0[0].products[3].categoryId, categoryid3);
        sv.svAssign(msg0[3].products[2].categoryId, categoryid0);
        sv.svAssign(msg0[0].products[8].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[2].colors[3].inStock, attributeid8);
        sv.svAssign(msg0[4].products[5].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].products[3].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[6].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[3].categoryName, categoryname0);
        sv.svAssign(msg0[4].products[8].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[6].categoryId, categoryid3);
        sv.svAssign(msg0[3].products[5].categoryId, categoryid0);
        sv.svAssign(msg0[4].products[6].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[10].productId, attributeid6);
        sv.svAssign(msg0[0].products[10].categoryId, categoryid3);
        sv.svAssign(msg0[0].products[1].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[0].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[0].products[5].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[1].products[3].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[3].products[4].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[4].products[2].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[3].products[2].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[4].products[5].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[1].products[2].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[2].products[0].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].products[1].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[3].products[1].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[2].products[0].productId, attributeid5);
        sv.svAssign(msg0[0].products[7].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[0].products[2].productId, attributeid4);
        sv.svAssign(msg0[2].products[0].categoryId, categoryid1);
        sv.svAssign(msg0[0].products[10].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[1].promotedProduct.id, attributeId);
        sv.svAssign(msg0[0].products[2].categoryId, categoryid3);
        sv.svAssign(msg0[1].products[3].productId, attributeid0);
        sv.svAssign(msg0[3].products[1].categoryId, categoryid0);
        sv.svAssign(msg0[0].categoryName, categoryname3);
        sv.svAssign(msg0[0].products[6].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[3].products[5].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].products[3].colors[2].inStock, attributeid8);
        sv.svAssign(msg0[0].categoryId, categoryid3);
        sv.svAssign(msg0[1].products[3].categoryId, categoryId);
        sv.svAssign(msg0[4].products[2].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[9].colors[0].inStock, attributeid8);
        sv.svAssign(msg0[1].products[2].colors[4].inStock, attributeid8);
        sv.svAssign(msg0[4].categoryName, categoryname2);
        sv.svAssign(msg0[4].products[6].colors[1].inStock, attributeid8);
        sv.svAssign(msg0[4].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[6].productId, categoryid1);
        sv.svAssign(msg0[4].products[5].categoryId, categoryid2);
        sv.svAssign(msg0[0].products[9].productId, categoryid2);
        sv.svAssign(msg0[0].products[9].categoryId, categoryid3);
        sv.svAssign(msg0[0].products[6].colors[5].inStock, attributeid8);
        sv.svAssign(msg0[2].products[0].colors[0].inStock, attributeid8);
        let corr0 = this.srvc.GET("/all_data")
            .withRequest()
            .withHeaders(httpHeaders0);
        this.srvc.GET("")
            .withRequest()
            .withHeaders(httpHeaders1)
            .withDelay(104)
            .withResponse(
                [ {
                  "categoryId" : categoryid3,
                  "categoryName" : categoryname3,
                  "managedImageId" : "1235",
                  "products" : [ {
                    "id" : categoryid2,
                    "productName" : "HP Stream - 11-d020nr Laptop",
                    "price" : 99179.99,
                    "description" : "Work from a happy place with a stylish, affordable, Windows-based PC. Store your content in the cloud for easy access from anywhere you have internet.",
                    "productStatus" : "Active",
                    "managedImageId" : "1245"
                  }, {
                    "id" : categoryid0,
                    "productName" : "HP Spectre x360 - 13-4102dx",
                    "price" : 1399.99,
                    "description" : "Stunning, ultra-slim convertible PC with a 360° hinge",
                    "productStatus" : "Active",
                    "managedImageId" : "1400"
                  }, {
                    "id" : categoryid3,
                    "productName" : "HP Pavilion 15t Touch Laptop",
                    "price" : 519.99,
                    "description" : "Redesigned with you in mind, the HP Pavilion keeps getting better. Our best-selling notebook is now more powerful so you can watch more, play more, and store more, all in style.",
                    "productStatus" : "Active",
                    "managedImageId" : "1100"
                  }, {
                    "id" : attributeid9,
                    "productName" : "HP ENVY x360 - 15t Laptop",
                    "price" : 699.99,
                    "description" : "We took our remarkable 360° convertible PC and enhanced it with premium features to give you ultimate flexibility and enviable looks.",
                    "productStatus" : "Active",
                    "managedImageId" : "1600"
                  }, {
                    "id" : attributeid4,
                    "productName" : "HP ENVY - 17t Touch Laptop",
                    "price" : 849.99,
                    "description" : "We took our remarkable 360° convertible PC and enhanced it with premium features to give you ultimate flexibility and enviable looks.",
                    "productStatus" : "Active",
                    "managedImageId" : "1700"
                  }, {
                    "id" : attributeid10,
                    "productName" : "HP Chromebook 14 G1(ENERGY STAR)",
                    "price" : 299.99,
                    "description" : "This HP notebook is all about getting the perfect combination of design, reliability, and features. Style and productivity while keeping your wallet in mind - now that's something to get excited about.",
                    "productStatus" : "Active",
                    "managedImageId" : "1249"
                  }, {
                    "id" : categoryid1,
                    "productName" : "HP Pavilion 15z Touch Laptop",
                    "price" : 449.99,
                    "description" : "Redesigned with you in mind, the HP Pavilion keeps getting better. Our best-selling notebook is now more powerful so you can watch more, play more, and store more, all in style.",
                    "productStatus" : "Active",
                    "managedImageId" : "1300"
                  }, {
                    "id" : attributeid2,
                    "productName" : "HP Pavilion x360 - 11t Touch Laptop",
                    "price" : 319.99,
                    "description" : "There’s no limit to what this value-packed convertible PC can do. Easily convert from notebook to stand to tent to tablet mode. It’s an app-loving, friend-connecting, 360°-bending machine.",
                    "productStatus" : "Active",
                    "managedImageId" : "11100"
                  }, {
                    "id" : categoryId,
                    "productName" : "HP Pavilion 15z Laptop",
                    "price" : 549.99,
                    "description" : "Redesigned with you in mind, the HP Pavilion keeps getting better. Our best-selling notebook is now more powerful so you can watch more, play more, and store more, all in style.",
                    "productStatus" : "Active",
                    "managedImageId" : "1200"
                  }, {
                    "id" : attributeid6,
                    "productName" : "HP ZBook 17 G2 Mobile Workstation",
                    "price" : 1799.0,
                    "description" : "On the go creativity knows no limits on a vivid 17.3 inch diagonal HP ZBook 17 G2. Showcase your best work in the office or on the go and take advantage of HP’s most powerful processing, graphics, simple scalability, and blazing-fast connectivity to perform and collaborate at the speed of creativity.",
                    "productStatus" : "Active",
                    "managedImageId" : "1800"
                  }, {
                    "id" : attributeid8,
                    "productName" : "HP Chromebook 14 G1(ES)",
                    "price" : 1261.99,
                    "description" : "Introducing the next generation HP EliteBook Folio 9480m Ultrabook™[2]. Timeless, ultra slim profile in an all metal design with optional 4G Broadband wWAN, and 4th Generation Intel® Core™ Processing Technology.",
                    "productStatus" : "Active",
                    "managedImageId" : "1250"
                  } ]
                }, {
                  "categoryId" : categoryId,
                  "categoryName" : categoryname1,
                  "managedImageId" : "1234",
                  "products" : [ {
                    "id" : attributeid0,
                    "productName" : "Logitech USB Headset H390",
                    "price" : 39.99,
                    "description" : "Features on this product will exceeded your expectations.",
                    "productStatus" : "Active",
                    "managedImageId" : "2400"
                  }, {
                    "id" : attributeId,
                    "productName" : "Bose SoundLink Around-ear Wireless Headphones II",
                    "price" : 279.95,
                    "description" : "Wireless freedom meets best-in-class sound.",
                    "productStatus" : "OutOfStock",
                    "managedImageId" : "2300"
                  }, {
                    "id" : attributeid3,
                    "productName" : "Beats Studio 2 Over-Ear Matte Black Headphones",
                    "price" : 179.99,
                    "description" : "The world’s most famous headphone has been completely redesigned and reimagined. The new Beats Studio® is lighter, sexier, stronger, and more comfortable, with precision sound, Adaptive Noise Canceling, a 20-hour rechargeable battery, and RemoteTalk™. It has all the energy and excitement you expect from Beats, plus a powerful, reengineered sound.",
                    "productStatus" : "Active",
                    "managedImageId" : "2200"
                  }, {
                    "id" : attributeid7,
                    "productName" : "HP H2310 In-ear Headset",
                    "price" : 13.99,
                    "description" : "Enjoy an acoustic concert in your ears with HP’s In-Ear Headset H2310. Available in trend-setting design in four color options and compatible with most smartphones, MP3 players and tablets – including Android™ and Apple®. Easily switch from jamming to tunes to connecting with friends using the inline microphone. Quality craftsmanship, value priced, and awesome sound.",
                    "productStatus" : "Active",
                    "managedImageId" : "2100"
                  } ]
                }, {
                  "categoryId" : categoryid1,
                  "categoryName" : categoryName,
                  "managedImageId" : "1236",
                  "products" : [ {
                    "id" : 18,
                    "productName" : "HP Pro Tablet 608 G1",
                    "price" : 479.0,
                    "description" : "Transform your business with this small stylish business tablet equipped with a brilliant, high definition display and the pervasive connectivity to mobilize nearly any business process. Choose from an expansive choice of accessories[2] for a customized experience.",
                    "productStatus" : "Active",
                    "managedImageId" : "3300"
                  }, {
                    "id" : attributeid5,
                    "productName" : "HP ElitePad 1000 G2 Tablet",
                    "price" : 1009.0,
                    "description" : "More than a tablet—a total business solution. The elegant and sleek HP ElitePad 1000 G2 has the performance and flexibility to transform the way you work. Redefine productivity and stay light with the confidence of the leading manageability, security, and support you expect from HP.",
                    "productStatus" : "Active",
                    "managedImageId" : "3100"
                  }, {
                    "id" : attributeid1,
                    "productName" : "HP Elite x2 1011 G1 Tablet",
                    "price" : 1279.0,
                    "description" : "Ultrabook™[2] Power\nPower up for ultimate power with Windows 8.1,[1] 5th Gen Intel® Core™ M processors,[4] with optional vPro™[5] and long battery life provided by dual tablet and keyboard base batteries.",
                    "productStatus" : "Active",
                    "managedImageId" : "3200"
                  } ]
                }, {
                  "categoryId" : categoryid0,
                  "categoryName" : categoryname0,
                  "managedImageId" : "1237",
                  "products" : [ {
                    "id" : 22,
                    "productName" : "HP Roar Wireless Speaker",
                    "price" : 84.99,
                    "description" : "Showcase your music anywhere with the ease of wireless Bluetooth® connectivity.",
                    "productStatus" : "Active",
                    "managedImageId" : "4400"
                  }, {
                    "id" : 25,
                    "productName" : "Bose SoundLink Wireless Speaker",
                    "price" : 129.0,
                    "description" : "If music is your motivation, wait until you hear the SoundLink® Color Bluetooth speaker. It plays your favorite tunes from your favorite Bluetooth device-out loud in clear, full audio-just about anywhere you want to go. It's small, durable and simple to use. And it comes in a spectrum of colors to match almost any style.",
                    "productStatus" : "Active",
                    "managedImageId" : "4700"
                  }, {
                    "id" : 21,
                    "productName" : "HP Roar Plus Wireless Speaker",
                    "price" : 169.99,
                    "description" : "Showcase your music anywhere with the ease of wireless Bluetooth® connectivity.",
                    "productStatus" : "Active",
                    "managedImageId" : "4300"
                  }, {
                    "id" : 19,
                    "productName" : "HP S9500 Bluetooth Wireless Speaker",
                    "price" : 200.0,
                    "description" : "Impress … everyone! Futuristic design with perforated steel formed into subtle angles. Requiring only minimal space, this speaker is the ideal complement to any setting.",
                    "productStatus" : "Active",
                    "managedImageId" : "4100"
                  }, {
                    "id" : 24,
                    "productName" : "HP Roar Mini Wireless Speaker",
                    "price" : 44.99,
                    "description" : "Attention-getting design, color, and sound - the HP Roar Mini Wireless Speaker. Exceptional size-defying audio while streaming music and calls from a distinctively compact speaker.",
                    "productStatus" : "Active",
                    "managedImageId" : "4600"
                  }, {
                    "id" : 23,
                    "productName" : "Logitech X100 Speaker System - Wireless Speaker(s)",
                    "price" : 49.99,
                    "description" : "Pump up the volume and enjoy crystal-clear sound from this mobile speaker. This portable speaker is perfect for life on-the-go. Take it on the road or relax and listen at home because this mobile speaker goes everywhere. Simple, intuitive design lets you wirelessly connect and stream music from your Bluetooth-enabled device from up to 30' away. Easily manage phone calls and volume control from your mobile phone. Enjoy five hours of continuous play before you need to recharge. Recharge the built-in, lithium-ion battery with the convenience of the included micro-USB cable.",
                    "productStatus" : "Active",
                    "managedImageId" : "4500"
                  }, {
                    "id" : 20,
                    "productName" : "Bose Soundlink Bluetooth Speaker III",
                    "price" : 269.99,
                    "description" : "Meet the speaker that brings your music and friends together-with a style that's all your own. The SoundLink® Bluetooth speaker III is our best-performing mobile Bluetooth speaker. It plays louder and longer than its popular predecessor, with advanced Bose® technologies that reproduce the fullness, clarity and depth of your music. And a colorful assortment of optional covers let you personalize your speaker.",
                    "productStatus" : "Active",
                    "managedImageId" : "4200"
                  } ]
                }, {
                  "categoryId" : categoryid2,
                  "categoryName" : categoryname2,
                  "managedImageId" : "1238",
                  "products" : [ {
                    "id" : 33,
                    "productName" : "HP Z8000 Bluetooth Mouse",
                    "price" : 50.99,
                    "description" : "The exquisite HP Z8000 Bluetooth Mouse is only 18mm (.7in) height, saves power with Bluetooth® Low Energy connectivity, and provides effortless capacitive touch control. The future is here.",
                    "productStatus" : "Active",
                    "managedImageId" : "5800"
                  }, {
                    "id" : 28,
                    "productName" : "HP Z3200 Wireless Mouse",
                    "price" : 29.99,
                    "description" : "The HP Wireless Mouse Z3200 provides powerful Blue LED optical tracking. Its ambidextrous shape and familiar button controls are easy to use. Compact contoured control.",
                    "productStatus" : "Active",
                    "managedImageId" : "5300"
                  }, {
                    "id" : 29,
                    "productName" : "HP USB 3 Button Optical Mouse",
                    "price" : 9.99,
                    "description" : "Smooth and Accurate - The HP USB 3-Button Optical Mouse is the affordable desktop optical mouse solution that combines functionality with style",
                    "productStatus" : "Active",
                    "managedImageId" : "5400"
                  }, {
                    "id" : 32,
                    "productName" : "Kensington Orbit 72337 Trackball with Scroll Ring",
                    "price" : 39.99,
                    "description" : "All-day comfort and scrolling come together in the Kensington Orbit Trackball with Scroll Ring. The scroll ring allows you to fly through web pages and documents. And all while delivering comfort and space savings no mouse can match.",
                    "productStatus" : "Active",
                    "managedImageId" : "5700"
                  }, {
                    "id" : 31,
                    "productName" : "Logitech G502 Proteus Core",
                    "price" : 79.99,
                    "description" : "MAKE IT YOURS!\nProteus Core perfectly tuned by you.\nProteus Core allows you to change the weight, balance, and enables you to adapt to wherever you choose to play. Customize it to the way you game and make it yours!\n\nPERSONALLY-TUNED PERFORMANCE\nAdapts to your environment\nFine tune the optical sensor in Proteus Core to your playing surface for better accuracy, precision and responsiveness. A quick tuning process, and you are battle ready.",
                    "productStatus" : "Active",
                    "managedImageId" : "5600"
                  }, {
                    "id" : 34,
                    "productName" : "Microsoft Sculpt Touch Mouse",
                    "price" : 49.99,
                    "description" : "Looking for a portable mouse that helps you get things done? Sculpt Touch Mouse saves time in long documents and works virtually anywhere, with no cables or transceivers to connect. And it's designed to fit comfortably in either hand.\nThe four-way touch scrolling pad on the Sculpt Touch Mouse lets you breeze up and down, left and right, and through windows and documents with just the swipe of your finger. While you scroll, you'll feel the nice surprise of tactile feedback. Sculpt Touch Mouse is also a powerful complement to Windows 8, navigating fluidly and intuitively around the Start Screen.\n",
                    "productStatus" : "Active",
                    "managedImageId" : "5900"
                  }, {
                    "id" : 26,
                    "productName" : "Kensington Orbit 72352 Trackball",
                    "price" : 59.99,
                    "description" : "The Kensington Orbit Wireless Mobile Trackball offers a precise, compact and versatile experience with a centered-ball design. With no wires to tie you down, the 2.4 GHz wireless with storable nano receiver works wherever you do -- at your home or office. And the unique touch scrolling lets you glide effortlessly through web pages and documents.",
                    "productStatus" : "Active",
                    "managedImageId" : "5100"
                  }, {
                    "id" : 27,
                    "productName" : "HP Z3600 Wireless Mouse",
                    "price" : 15.99,
                    "description" : "The tiny HP Wireless Mouse Z3600 provides stylish comfort and control for your mobile computing needs. With optical tracking, 3 button controls, and the freedom to connect up to 30ft (10m) away, this compact mouse provides oversized performance.",
                    "productStatus" : "Active",
                    "managedImageId" : "5200"
                  }, {
                    "id" : 30,
                    "productName" : "HP Z4000 Wireless Mouse",
                    "price" : 9.99,
                    "description" : "The sleek and low-profiled design make the Z4000 the must-have companion to every thin notebook or tablet. Style and comfort within a dynamic ultra-mobile wireless mouse.",
                    "productStatus" : "Active",
                    "managedImageId" : "5505"
                  } ]
                } ]
            , sv.JSON)
            .withHeaders(httpHeaders2)
            .withStatusCode(200)
            .withDelay(171);
        corr0
            .withResponse(msg0, sv.JSON)
            .withHeaders(httpHeaders3)
            .withStatusCode(200)
            .withDelay(1900);
        this.srvc.GET("/attributes")
            .withRequest()
            .withHeaders(httpHeaders4)
            .withDelay(770)
            .withResponse(
                {
                  "categoriesAttributes" : [ {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : categoryid3,
                    "attributeName" : "GRAPHICS",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : categoryId,
                    "attributeName" : "CUSTOMIZATION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : categoryid1,
                    "attributeName" : "OPERATING SYSTEM",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : categoryid0,
                    "attributeName" : "PROCESSOR",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : categoryid2,
                    "attributeName" : "MEMORY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid9,
                    "attributeName" : "DISPLAY",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid4,
                    "attributeName" : "CONNECTOR",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid6,
                    "attributeName" : "COMPATIBILITY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid10,
                    "attributeName" : "WEIGHT",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid8,
                    "attributeName" : "WIRELESS TECHNOLOGY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid2,
                    "attributeName" : "SENSOR RESOLUTION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid7,
                    "attributeName" : "TYPE",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeId,
                    "attributeName" : "MANUFACTURER",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid0,
                    "attributeName" : "SCROLLER TYPE",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid3,
                    "attributeName" : "DISPLAY SIZE",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid5,
                    "attributeName" : "DISPLAY RESOLUTION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid3,
                    "categoryName" : categoryname3,
                    "attributeId" : attributeid1,
                    "attributeName" : "TOUCHSCREEN",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryId,
                    "categoryName" : categoryname1,
                    "attributeId" : attributeid6,
                    "attributeName" : "COMPATIBILITY",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryId,
                    "categoryName" : categoryname1,
                    "attributeId" : attributeid4,
                    "attributeName" : "CONNECTOR",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryId,
                    "categoryName" : categoryname1,
                    "attributeId" : attributeid10,
                    "attributeName" : "WEIGHT",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : categoryid3,
                    "attributeName" : "GRAPHICS",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : categoryId,
                    "attributeName" : "CUSTOMIZATION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : categoryid1,
                    "attributeName" : "OPERATING SYSTEM",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : categoryid0,
                    "attributeName" : "PROCESSOR",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : categoryid2,
                    "attributeName" : "MEMORY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : attributeid9,
                    "attributeName" : "DISPLAY",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : attributeid4,
                    "attributeName" : "CONNECTOR",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : attributeid6,
                    "attributeName" : "COMPATIBILITY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : attributeid10,
                    "attributeName" : "WEIGHT",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid1,
                    "categoryName" : categoryName,
                    "attributeId" : attributeid8,
                    "attributeName" : "WIRELESS TECHNOLOGY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : categoryid3,
                    "attributeName" : "GRAPHICS",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : categoryId,
                    "attributeName" : "CUSTOMIZATION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : categoryid1,
                    "attributeName" : "OPERATING SYSTEM",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : categoryid0,
                    "attributeName" : "PROCESSOR",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : categoryid2,
                    "attributeName" : "MEMORY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeid9,
                    "attributeName" : "DISPLAY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeid4,
                    "attributeName" : "CONNECTOR",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeid6,
                    "attributeName" : "COMPATIBILITY",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeid10,
                    "attributeName" : "WEIGHT",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeid8,
                    "attributeName" : "WIRELESS TECHNOLOGY",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeid2,
                    "attributeName" : "SENSOR RESOLUTION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeid7,
                    "attributeName" : "TYPE",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid0,
                    "categoryName" : categoryname0,
                    "attributeId" : attributeId,
                    "attributeName" : "MANUFACTURER",
                    "showInFilter" : true
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : categoryid3,
                    "attributeName" : "GRAPHICS",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : categoryId,
                    "attributeName" : "CUSTOMIZATION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : categoryid1,
                    "attributeName" : "OPERATING SYSTEM",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : categoryid0,
                    "attributeName" : "PROCESSOR",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : categoryid2,
                    "attributeName" : "MEMORY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid9,
                    "attributeName" : "DISPLAY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid4,
                    "attributeName" : "CONNECTOR",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid6,
                    "attributeName" : "COMPATIBILITY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid10,
                    "attributeName" : "WEIGHT",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid8,
                    "attributeName" : "WIRELESS TECHNOLOGY",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid2,
                    "attributeName" : "SENSOR RESOLUTION",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid7,
                    "attributeName" : "TYPE",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeId,
                    "attributeName" : "MANUFACTURER",
                    "showInFilter" : false
                  }, {
                    "categoryId" : categoryid2,
                    "categoryName" : categoryname2,
                    "attributeId" : attributeid0,
                    "attributeName" : "SCROLLER TYPE",
                    "showInFilter" : true
                  } ]
                }
            , sv.JSON)
            .withHeaders(httpHeaders5)
            .withStatusCode(200)
            .withDelay(136);
    }

}