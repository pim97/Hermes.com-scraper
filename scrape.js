const Scrappey = require('scrappey-wrapper');

/**
 * Check out our documentation here for more information: https://wiki.scrappey.com/
 * Your key can be found here: https://app.scrappey.com/#/
 */
const SCRAPPEY_API_KEY = 'API_KEY';
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

/**
 * Scrappey.com is a proxy-wrapper for browsers, it allows you to run browser actions and execute javascript on any website.
 * with advanced options such as caching, proxy rotation, anti-bot and more.
 */
async function run() {

    /**
     * For all session options check: https://wiki.scrappey.com/getting-started#78f3fd5551724a78b12d548e95485bbe
     * We allow for multiple sessions to be created, each session has a different proxy and user-agent and unique fingerprint.
     */
    const session = await scrappey.createSession()

    /**
     * Executes the browser actions requested
     */
    const scrape = await scrappey.get({

        /**
         * Send a GET request to the website
         */
        "cmd": "request.get",

        /**
         * Go to this page, the women shoes page
         */
        "url": "https://www.hermes.com/nl/en/category/women/shoes/#fh_view_size=32&country=au&fh_location=--/categories%3C{womenshoes}&fh_refview=lister|",

        /**
         * Scrape the intercepted request
         */
        "interceptFetchRequest": [
            "https://bck.hermes.com/products?urlParams"
        ]
    })

    /**
     * Example response
     */
    // const exampleResponse = {
    //     "solution": {
    //         "verified": true,
    //             "title": "Women's Shoes | Hermès Netherlands",
    //                 "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
    //                     "innerText": "",
    //                         "cookies": [
    //                             {
    //                                 "name": "datadome",
    //                                 "value": "SBB8Sg2hKhnIJyFysP6NzyV0L3U3yhbE7~Mz2rHD8P1v~u5PkDztn52OFMV85ewEmhSsWQv7m5OOnbwgJvVM4iy_Lr0kCUxAs6~Ryfhs7kypMkYcacunWcrt3h0Rfvg",
    //                                 "domain": ".hermes.com",
    //                                 "path": "/",
    //                                 "expires": 1726389830,
    //                                 "httpOnly": false,
    //                                 "secure": true,
    //                                 "sameSite": "Lax"
    //                             }
    //                         ],
    //                             "response": [
    //                                 {
    //                                     "url": "https://bck.hermes.com/products?urlParams=fh_view_size=32%26country=au%26fh_location=--/categories%3C%7Bwomenshoes%7D%26fh_refview=lister&locale=nl_en&category=WOMENSHOES&sort=relevance&pagesize=42",
    //                                     "statusCode": 200,
    //                                     "method": "GET",
    //                                     "responseHeaders": {
    //                                         "content-type": "application/json",
    //                                         "x-amzn-requestid": "17131588-cc01-460e-8599-8ac78ed1a325",
    //                                         "x-datadome": "protected",
    //                                         "access-control-allow-origin": "https://www.hermes.com",
    //                                         "content-encoding": "gzip",
    //                                         "accept-ch": "Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-Device-Memory",
    //                                         "x-hermes-created-at": "2023-09-16T08:40:46.846Z",
    //                                         "x-amzn-remapped-connection": "Keep-Alive",
    //                                         "x-amz-apigw-id": "LV2CXF-XFiAFveQ=",
    //                                         "cache-control": "public, max-age=300",
    //                                         "x-amzn-remapped-server": "restify",
    //                                         "request-id": "1b5b6b7c-ff06-466b-90e5-dcab01956cb8",
    //                                         "response-time": "767",
    //                                         "x-amzn-remapped-content-md5": "ePYh1udjSSH6lk77xHOGWw==",
    //                                         "x-amzn-remapped-date": "Sat, 16 Sep 2023 08:40:47 GMT",
    //                                         "access-control-allow-credentials": "true",
    //                                         "via": "1.1 caafbc8a9aa04b09dd564a3ddef60622.cloudfront.net (CloudFront), 1.1 varnish",
    //                                         "x-amz-cf-pop": "IAD12-P3",
    //                                         "x-amz-cf-id": "fanDAaHjK9emNG3USuhpJReZkPnVmkhVIQg2MpDY-OvzySxNYsAcDA==",
    //                                         "accept-ranges": "bytes",
    //                                         "date": "Sat, 16 Sep 2023 08:43:52 GMT",
    //                                         "age": "185",
    //                                         "x-served-by": "cache-iad-kjyo7100154-IAD",
    //                                         "x-cache": "Miss from cloudfront, HIT",
    //                                         "x-cache-hits": "1",
    //                                         "x-timer": "S1694853833.658007, VS0, VE1",
    //                                         "vary": "origin, Accept-Encoding",
    //                                         "content-length": "6645",
    //                                         "x-firefox-spdy": "h2"
    //                                     },
    //                                     "requestHeaders": {
    //                                         "host": "bck.hermes.com",
    //                                         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
    //                                         "accept": "application/json, text/plain, */*",
    //                                         "accept-language": "en-US",
    //                                         "accept-encoding": "gzip, deflate, br",
    //                                         "referer": "https://www.hermes.com/",
    //                                         "x-hermes-locale": "nl_en",
    //                                         "origin": "https://www.hermes.com",
    //                                         "dnt": "1",
    //                                         "sec-fetch-dest": "empty",
    //                                         "sec-fetch-mode": "cors",
    //                                         "sec-fetch-site": "same-site",
    //                                         "connection": "keep-alive",
    //                                         "cookie": "datadome=SBB8Sg2hKhnIJyFysP6NzyV0L3U3yhbE7~Mz2rHD8P1v~u5PkDztn52OFMV85ewEmhSsWQv7m5OOnbwgJvVM4iy_Lr0kCUxAs6~Ryfhs7kypMkYcacunWcrt3h0Rfvg",
    //                                         "te": "trailers"
    //                                     },
    //                                     "response": "{\"total\":280,\"products\":{\"items\":[{\"sku\":\"H232072Z VF360\",\"title\":\"Heel 70 pump\",\"productCode\":\"Z851\",\"assets\":[{\"url\":\"//assets.hermes.com/is/image/hermesproduct/232072Z%20VF_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0\",\"type\":\"image\",\"tag\":\"front\",\"position\":1,\"source\":\"scene7\"},{\"url\":\"//assets.hermes.com/is/image/hermesproduct/232072Z%20VF_side_wm_4?size=3000,3000&extend=0,0,0,0&align=0,0\",\"type\":\"image\",\"tag\":\"side\",\"position\":2,\"source\":\"scene7\"},{\"url\":\"//assets.hermes.com/is/image/hermesproduct/232072Z%20VF_back_wm_5?size=3000,3000&extend=0,0,0,0&align=0,0\",\"type\":\"image\",\"tag\":\"back\",\"position\":3,\"source\":\"scene7\"},{\"url\":\"//assets.hermes.com/is/image/hermesproduct/232072Z%20VF_above_wm_6?size=3000,3000&extend=0,0,0,0&align=0,0\",\"type\":\"image\",\"tag\":\"above\",\"position\":4,\"source\":\"scene7\"}],\"moreColors\":false,\"size\":\"36\",\"avgColor\":\"Green\",\"departmentCode\":\"Z\",\"familyCode\":\"Z01\",\"divisionCode\":\"02\",\"price\":1660,\"priceType\":\"fixed\",\"url\":\"/product/heel-70-pump-H232072ZvVF360\".... etc etc"
    //                                 }
    //                             ]
    //     },
    //     "timeElapsed": 7601,
    //         "data": "success",
    //             "session": "a5008d73-af39-4e04-a252-3d2d1ab0d5ce"
    // }


    console.log(JSON.stringify(scrape, undefined, 2))

    /**
     * Destroys the session, this will free up space for other users
     */
    await scrappey.destroySession(session.session)
}

run().catch(console.error);