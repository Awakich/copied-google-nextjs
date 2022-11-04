export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - test",
        totalResults: "16720000000",
        searchTerms: "test",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "15f1f3ed7e21c49e1",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - test",
        totalResults: "16720000000",
        searchTerms: "test",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "15f1f3ed7e21c49e1",
      },
    ],
  },
  context: {
    title: "Seachy",
  },
  searchInformation: {
    searchTime: 0.629972,
    formattedSearchTime: "0.63",
    totalResults: "16720000000",
    formattedTotalResults: "16,720,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Test.com: Home",
      htmlTitle: "<b>Test</b>.com: Home",
      link: "https://test.com/",
      displayLink: "test.com",
      snippet:
        "I'm looking for... An Internet Speed Test A COVID Test A Testing And Certification Platform A Lab Test Location A Virtual Proctoring Solution",
      htmlSnippet:
        "I&#39;m looking for... An Internet Speed <b>Test</b> A COVID <b>Test</b> A <b>Testing</b> And Certification Platform A Lab <b>Test</b> Location A Virtual Proctoring Solution",
      cacheId: "cljxcDX_QB8J",
      formattedUrl: "https://test.com/",
      htmlFormattedUrl: "https://<b>test</b>.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSy7thielYoTqU-P3ad3zMaiIiXHwwHfHDaJB1jXxiH55kXTJgHthtyt5Aa",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "og:site_name": "Test.com",
            "article:modified_time": "2021-10-18T20:35:54+00:00",
            viewport: "width=device-width, initial-scale=1",
            "og:title": "Home - Test.com",
            "og:locale": "en_US",
            "og:url": "https://test.com/",
            "msapplication-tileimage":
              "https://test.com/wp-content/uploads/2021/08/Gauge-Fav-Icon.png",
          },
        ],
        cse_image: [
          {
            src: "https://test.com/wp-content/uploads/2021/10/hay-s-YXg0VPwLwnM-unsplash-scaled-1-300x200.jpeg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Test Definition & Meaning - Merriam-Webster",
      htmlTitle: "<b>Test</b> Definition &amp; Meaning - Merriam-Webster",
      link: "https://www.merriam-webster.com/dictionary/test",
      displayLink: "www.merriam-webster.com",
      snippet:
        "Kids Definition of test · 1 : a means of finding out the nature, quality, or value of something put the new car to the test · 2 : a procedure or method for ...",
      htmlSnippet:
        "Kids Definition of <b>test</b> &middot; 1 : a means of finding out the nature, quality, or value of something put the new car to the <b>test</b> &middot; 2 : a procedure or method for&nbsp;...",
      cacheId: "TGnEwn1_tb0J",
      formattedUrl: "https://www.merriam-webster.com/dictionary/test",
      htmlFormattedUrl:
        "https://www.merriam-webster.com/dictionary/<b>test</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKksTSKYwpW8It403nrjw5t1_a8pLO2PI6ImEG7uvFrNfacgiziPZgG-_O",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#2b5797",
            "og:image":
              "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png",
            "twitter:title": "Definition of TEST",
            "twitter:card": "summary",
            "theme-color": "#ffffff",
            "twitter:url": "https://www.merriam-webster.com/dictionary/test",
            "og:title": "Definition of TEST",
            "twitter:aria-text": "Share the Definition of test on Twitter",
            "og:aria-text": "Post the Definition of test to Facebook",
            "og:description":
              "a means of testing: such as; something (such as a series of questions or exercises) for measuring the skill, knowledge, intelligence, capacities, or aptitudes of an individual or group… See the full definition",
            "twitter:image":
              "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png",
            referrer: "unsafe-url",
            "fb:app_id": "178450008855735",
            "twitter:site": "@MerriamWebster",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "a means of testing: such as… See the full definition",
            "og:url": "https://www.merriam-webster.com/dictionary/test",
          },
        ],
        cse_image: [
          {
            src: "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Take a Test",
      htmlTitle: "Take a <b>Test</b>",
      link: "https://implicit.harvard.edu/implicit/takeatest.html",
      displayLink: "implicit.harvard.edu",
      snippet:
        "Preliminary Information. On the next page you'll be asked to select an Implicit Association Test (IAT) from a list of possible topics .",
      htmlSnippet:
        "Preliminary Information. On the next page you&#39;ll be asked to select an Implicit Association <b>Test</b> (IAT) from a list of possible topics .",
      cacheId: "hp0jVrH5XiUJ",
      formattedUrl: "https://implicit.harvard.edu/implicit/takeatest.html",
      htmlFormattedUrl:
        "https://implicit.harvard.edu/implicit/takea<b>test</b>.html",
      pagemap: {
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Mobile-Friendly Test - Google Search Console",
      htmlTitle: "Mobile-Friendly <b>Test</b> - Google Search Console",
      link: "https://search.google.com/test/mobile-friendly",
      displayLink: "search.google.com",
      snippet:
        "test code. About this tool. Test how easily a visitor can use your page on a mobile device. Just enter a page URL to see how your page scores.",
      htmlSnippet:
        "<b>test</b> code. About this tool. <b>Test</b> how easily a visitor can use your page on a mobile device. Just enter a page URL to see how your page scores.",
      cacheId: "J_vGwOd2geIJ",
      formattedUrl: "https://search.google.com/test/mobile-friendly",
      htmlFormattedUrl: "https://search.google.com/<b>test</b>/mobile-friendly",
      pagemap: {
        metatags: [
          {
            "application-name": "Search Test Tool",
            referrer: "origin",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            viewport:
              "initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
            "apple-mobile-web-app-capable": "yes",
            "apple-mobile-web-app-title": "Search Test Tool",
            "mobile-web-app-capable": "yes",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "America's Test Kitchen | Episodes, Recipes & Reviews | America's ...",
      htmlTitle:
        "America&#39;s <b>Test</b> Kitchen | Episodes, Recipes &amp; Reviews | America&#39;s ...",
      link: "https://www.americastestkitchen.com/",
      displayLink: "www.americastestkitchen.com",
      snippet:
        "Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.",
      htmlSnippet:
        "Watch every episode from every season and find the best recipes, equipment reviews, taste <b>tests</b>, and cooking videos for home cooks.",
      cacheId: "dSOkzGI8vY8J",
      formattedUrl: "https://www.americastestkitchen.com/",
      htmlFormattedUrl: "https://www.americas<b>test</b>kitchen.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmwcESq6RQY4fg-Hm3POEIOG5MrjXm2EjKAPQECtVRQ1QCJWxfbbJhMIo",
            width: "122",
            height: "143",
          },
        ],
        metatags: [
          {
            "pinterest-rich-pin": "false",
            "next-head-count": "30",
            "og:type": "website",
            "theme-color": "#d73a15",
            "twitter:title":
              "America's Test Kitchen | Episodes, Recipes & Reviews | America's Test Kitchen",
            "fb:app_id": "514672908740278",
            viewport: "width=device-width, initial-scale=1, maximum-scale=5",
            "twitter:description":
              "Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.",
            "og:title":
              "America's Test Kitchen | Episodes, Recipes & Reviews | America's Test Kitchen",
            "og:url": "http://www.americastestkitchen.com/",
            "og:description":
              "Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.",
            "fb:pages": "137227518307",
          },
        ],
        cse_image: [
          {
            src: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_400,q_auto:low,w_340/42658-sfs-turkey-for-a-crowd-82",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Test - Wikipedia",
      htmlTitle: "<b>Test</b> - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Test",
      displayLink: "en.wikipedia.org",
      snippet:
        "Test (assessment), an educational assessment intended to measure the respondents' knowledge or other abilities ...",
      htmlSnippet:
        "<b>Test</b> (assessment), an educational assessment intended to measure the respondents&#39; knowledge or other abilities&nbsp;...",
      cacheId: "R94CAo00wOYJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Test",
      htmlFormattedUrl: "https://en.wikipedia.org/wiki/<b>Test</b>",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "theme-color": "#eaecf0",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "Test - Wikipedia",
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Join a Test Meeting - Zoom",
      htmlTitle: "Join a <b>Test</b> Meeting - Zoom",
      link: "https://zoom.us/test",
      displayLink: "zoom.us",
      snippet:
        "Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars ...",
      htmlSnippet:
        "Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars&nbsp;...",
      cacheId: "Jsk355JURfkJ",
      formattedUrl: "https://zoom.us/test",
      htmlFormattedUrl: "https://zoom.us/<b>test</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRolFWdpenflD47fCy2cpX-jIyuSO2jwERPKuNJTw33FfES1e0JhvWM_04L",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "2bec2c9f9a864e14528964bf24c404b3",
            referrer: "origin-when-cross-origin",
            "og:image": "https://st3.zoom.us/static/6.2.9409/image/thumb.png",
            "og:type": "website",
            "fb:app_id": "113289095462482",
            "og:site_name": "Zoom",
            viewport: "width=device-width, initial-scale=1, minimum-scale=1.0",
            "og:title":
              "Video Conferencing, Web Conferencing, Webinars, Screen Sharing",
            "og:url": "https://zoom.us/",
            "og:description":
              "Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems. Zoom Rooms is the original software-based conference room solution used around the world in board, conference, huddle, and training rooms, as well as executive offices and classrooms. Founded in 2011, Zoom helps businesses and organizations bring their teams together in a frictionless environment to get more done. Zoom is a publicly traded company headquartered in San Jose, CA.",
            "twitter:account_id": "522701657",
          },
        ],
        cse_image: [
          {
            src: "https://st3.zoom.us/static/6.2.9409/image/thumb.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Fast.com: Internet Speed Test",
      htmlTitle: "Fast.com: Internet Speed <b>Test</b>",
      link: "https://fast.com/",
      displayLink: "fast.com",
      snippet:
        "How fast is your download speed? In seconds, FAST.com's simple Internet speed test will estimate your ISP speed.",
      htmlSnippet:
        "How fast is your download speed? In seconds, FAST.com&#39;s simple Internet speed <b>test</b> will estimate your ISP speed.",
      cacheId: "C4odSFX1SA4J",
      formattedUrl: "https://fast.com/",
      htmlFormattedUrl: "https://fast.com/",
      pagemap: {
        metatags: [
          {
            "msapplication-tilecolor": "#ffffff",
            "og:image":
              "https://fast.com/assets/share/fb_en_____share_shot___.png",
            "theme-color": "#ffffff",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Internet Speed Test",
            "twitter:description":
              "How fast is your download speed? In seconds, FAST.com's simple Internet speed test will estimate your ISP speed.",
            "og:title": "Internet Speed Test",
            "msapplication-tileimage": "/assets/favicons/ms-icon-144x144.png",
            "og:url": "https://fast.com/share/____share_shot___.html",
            "og:description":
              "How fast is your download speed? In seconds, FAST.com's simple Internet speed test will estimate your ISP speed.",
            "twitter:image":
              "https://fast.com/assets/share/tw_en_____share_shot___.png",
          },
        ],
        cse_image: [
          {
            src: "https://fast.com/assets/share/fb_en_____share_shot___.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Speedtest by Ookla - The Global Broadband Speed Test",
      htmlTitle: "Speedtest by Ookla - The Global Broadband Speed <b>Test</b>",
      link: "https://www.speedtest.net/",
      displayLink: "www.speedtest.net",
      snippet:
        "Use Speedtest on all your devices with our free desktop and mobile apps.",
      htmlSnippet:
        "Use Speedtest on all your devices with our free desktop and mobile apps.",
      cacheId: "5RD1THTfC6wJ",
      formattedUrl: "https://www.speedtest.net/",
      htmlFormattedUrl: "https://www.speed<b>test</b>.net/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQC17A5qlfSeCSM9iBFHTNES2GOg0pKqfKOGg2xyV95DvgYEyQ5Q67u4FY",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image": "//b.cdnst.net/images/share-logo.png",
            "twitter:app:id:googleplay": "org.zwanoo.android.speedtest",
            "apple-itunes-app": "app-id=300704847",
            "og:type": "website",
            "og:image:width": "382",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "Speedtest by Ookla - The Global Broadband Speed Test",
            "og:site_name": "Speedtest.net",
            "og:title": "Speedtest by Ookla - The Global Broadband Speed Test",
            "og:image:height": "200",
            "twitter:app:id:ipad": "300704847",
            "og:image:type": "image/png",
            "twitter:app:id:iphone": "300704847",
            "og:description":
              "Use Speedtest on all your devices with our free desktop and mobile apps.",
            "twitter:image": "//b.cdnst.net/images/share-logo.png",
            "fb:app_id": "113312902042192",
            "twitter:site": "@speedtest",
            viewport: "width=device-width, initial-scale=1.0, minimal-ui",
            "twitter:description":
              "Use Speedtest on all your devices with our free desktop and mobile apps.",
            "og:url": "https://www.speedtest.net/",
            "google-play-app": "app-id=org.zwanoo.android.speedtest",
          },
        ],
        cse_image: [
          {
            src: "https://b.cdnst.net/images/gauge-gradient-dl-single-web.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "COVID-19 Testing: What You Need to Know | CDC",
      htmlTitle: "COVID-19 <b>Testing</b>: What You Need to Know | CDC",
      link: "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html",
      displayLink: "www.cdc.gov",
      snippet:
        "These tests detect viral genetic material, which may stay in your body for up to 90 days after you test positive. Therefore, you should not use a NAAT if you ...",
      htmlSnippet:
        "These <b>tests</b> detect viral genetic material, which may stay in your body for up to 90 days after you <b>test</b> positive. Therefore, you should not use a NAAT if you&nbsp;...",
      cacheId: "jV_-IW4ip-0J",
      formattedUrl:
        "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html",
      htmlFormattedUrl:
        "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-<b>testing</b>/<b>testing</b>.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pQc-qSFLyocpav2cF0EocltQjJ5n2BF2O_RdAnZhWGD0my3-7Sbas6sT",
            width: "310",
            height: "163",
          },
        ],
        organization: [
          {
            telephone: "Call 800-232-4636",
            url: "Email Us",
          },
        ],
        contactpoint: [
          {
            url: "U.S. Department of Health & Human Services",
          },
          {
            url: "USA.gov",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.cdc.gov/coronavirus/2019-ncov/images/your-health-sm.jpg",
            "theme-color": "#075290",
            "cdc:content_id": "14865",
            "article:published_time": "2020-02-11",
            "twitter:card": "summary_large_image",
            "og:site_name": "Centers for Disease Control and Prevention",
            "cdc:maintained_by":
              "NATL CENTER FOR IMMUNIZATION AND RESPIRATORY DISEASES",
            "cdc:first_published": "Mar. 14, 2020",
            "og:image:type": "image/jpeg",
            "og:description":
              "Symptoms, testing, what to do if sick, daily activities, and more.",
            "twitter:creator": "@CDCgov",
            "cdc:last_published": "2022-10-04T18:05:59Z",
            "twitter:site": "@CDCgov",
            "cdc:last_reviewed": "Sept. 28, 2022",
            "cdc:content_source":
              "NATL CENTER FOR IMMUNIZATION AND RESPIRATORY DISEASES; DIVISION OF VIRAL DISEASES",
            "og:type": "article",
            "twitter:title": "COVID-19 and Your Health",
            "og:title": "COVID-19 and Your Health",
            "cdc:last_updated": "Sept. 28, 2022",
            "dc.date": "2022-10-04T05:44:01Z",
            "article:author": "CDC",
            "cdc:wcms_build": "4.22.9 - b.1649",
            "twitter:image:src":
              "https://www.cdc.gov/coronavirus/2019-ncov/images/your-health-sm.jpg",
            "cdc:template_version": "4.0",
            "fb:app_id": "205691699516606",
            viewport:
              "width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no",
            "apple-mobile-web-app-capable": "yes",
            "og:author": "CDC",
            "twitter:description":
              "Symptoms, testing, what to do if sick, daily activities, and more.",
            "mobile-web-app-capable": "yes",
          },
        ],
        cse_image: [
          {
            src: "https://www.cdc.gov/coronavirus/2019-ncov/images/your-health-sm.jpg",
          },
        ],
      },
    },
  ],
};
