# Kaltura Node-JS Template
All the necessary components, and some nice-to-haves to get a node.js app running with the Kaltura  API.

# How to Run
1. Copy env.template to .env and fill in your information
2. run npm install
3. npm run dev for developement
4. npm start for production

# Documentation

Kaltura has a rich and comprehensive [Analytics API](https://developer.kaltura.com/api-docs/Video-Analytics-and-Insights/media-analytics.html) that you can use to generate your own reports and analyses. You can also implement Kaltura's ready made Analytics javascript widget which provides some of the most frequently requested insights. 

![analytics_screen](/Users/hunterp/Documents/GitHub/analytics/readme_assets/analytics_screen.png)





```json
								audience/engagement
                audience/content-interactions
                audience/technology
                audience/geo-location
                bandwidth/publisher
                bandwidth/end-user
                live
```

## viewConfig Object

```json
[
    "audience": {
        "engagement": {
            "export": {},
            "refineFilter": {
                "mediaType": {},
                "entrySource": {},
                "tags": {},
                "owners": {},
                "categories": {},
                "geo": {}
            },
            "miniHighlights": {},
            "miniTopVideos": {},
            "miniPeakDay": {},
            "topVideos": {},
            "highlights": {},
            "impressions": {},
            "syndication": {}
        },
        "contentInteractions": {
            "export": {},
            "refineFilter": {
                "mediaType": {},
                "entrySource": {},
                "tags": {},
                "owners": {},
                "categories": {},
                "geo": {}
            },
            "miniInteractions": {},
            "miniTopShared": {},
            "topPlaybackSpeed": {},
            "topStats": {},
            "interactions": {},
            "moderation": {}
        },
        "geo": {
            "export": {},
            "refineFilter": {
                "geo": {},
                "tags": {},
                "categories": {}
            }
        },
        "technology": {
            "export": {},
            "devices": {},
            "topBrowsers": {},
            "topOs": {}
        }
    },
    "bandwidth": {
        "endUser": {
            "export": {},
            "refineFilter": {
                "mediaType": {},
                "entrySource": {},
                "owners": {},
                "geo": {}
            }
        },
        "publisher": {
            "export": {},
            "refineFilter": {
                "mediaType": {},
                "entrySource": {},
                "geo": {}
            }
        }
    },
    "contributors": {
        "export": {},
        "refineFilter": {
            "mediaType": {},
            "entrySource": {},
            "tags": {},
            "owners": {},
            "categories": {},
            "geo": {}
        },
        "miniHighlights": {},
        "miniTopContributors": {},
        "miniTopSources": {},
        "highlights": {},
        "contributors": {},
        "sources": {}
    },
    "entry": {
        "title": {},
        "export": {},
        "refineFilter": {
            "geo": {},
            "owners": {},
            "categories": {}
        },
        "details": {},
        "totals": {
            "social": {
                "likes": {},
                "shares": {}
            }
        },
        "entryPreview": {},
        "userEngagement": {
            "userFilter": {}
        },
        "performance": {},
        "impressions": {},
        "geo": {},
        "devices": {},
        "syndication": {}
    },
    "entryLive": {
        "export": {},
        "toggleLive": {},
        "details": {},
        "users": {},
        "bandwidth": {},
        "geo": {},
        "status": {},
        "player": {},
        "streamHealth": {},
        "devices": {},
        "discovery": {}
    },
    "playlist": {
        "title": {},
        "export": {},
        "refineFilter": {
            "geo": {},
            "owners": {},
            "categories": {}
        },
        "details": {},
        "totals": {},
        "performance": {},
        "videos": {}
    },
    "user": {
        "export": {},
        "refineFilter": {
            "mediaType": {},
            "entrySource": {},
            "tags": {},
            "categories": {}
        },
        "totals": {},
        "geoDevices": {},
        "lastViewedEntries": {},
        "insights": {
            "minutesViewed": {},
            "plays": {},
            "domains": {},
            "sources": {}
        },
        "viewer": {
            "viewedEntries": {},
            "engagement": {}
        },
        "contributor": {
            "mediaUpload": {},
            "topContent": {},
            "sources": {}
        }
    }
]
```



# How you can help (guidelines for contributors) 

Thank you for helping Kaltura grow! If you'd like to contribute please follow these steps:
* Use the repository issues tracker to report bugs or feature requests
* Read [Contributing Code to the Kaltura Platform](https://github.com/kaltura/platform-install-packages/blob/master/doc/Contributing-to-the-Kaltura-Platform.md)
* Sign the [Kaltura Contributor License Agreement](https://agentcontribs.kaltura.org/)

# Where to get help
* Join the [Kaltura Community Forums](https://forum.kaltura.org/) to ask questions or start discussions
* Read the [Code of conduct](https://forum.kaltura.org/faq) and be patient and respectful

# Get in touch
You can learn more about Kaltura and start a free trial at: http://corp.kaltura.com    
Contact us via Twitter [@Kaltura](https://twitter.com/Kaltura) or email: community@kaltura.com  
We'd love to hear from you!

# License and Copyright Information
All code in this project is released under the [AGPLv3 license](http://www.gnu.org/licenses/agpl-3.0.html) unless a different license for a particular library is specified in the applicable library path.   

Copyright © Kaltura Inc. All rights reserved.   
Authors and contributors: See [GitHub contributors list](https://github.com/kaltura/YOURREPONAME/graphs/contributors).  

### Open Source Libraries Used
