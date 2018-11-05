- [Yelp `json-server` wrapper](#yelp-json-server-wrapper)
  - [Quickstart](#quickstart)
    - [Endpoints](#endpoints)

## Yelp `json-server` wrapper

This is a quick fix solution to run a local API server locally that proxies requests to the Yelp API. This was built as a quick-fix to circumvent CORS issues and successfully make requests. It uses `json-server`.

**Note:**

This project (mostly) ignores the `db.json`, a file normally used by `json-server`; but `db.json` in included and may be used for simple requests to `/businesses/search` when lacking an API key.

### Quickstart

1. Create a `.env` file with proper keys (copy over from `.env-example`).
1. From within this directory, run:

```
> `yarn`
> `yarn start`
```

From within this project's parent directory, add `YELP_API_ROOT=http://localhost:3000/api` to the `.env` file, in place of the existing `YELP_API_ROOT`.

In a new tab, start your frontend application as normal. Moving forward, all requests will be sent through this local server, then proxying the Yelp API (circumventing CORS).

#### Endpoints

Presently, only three endpoints are included:

Business Search: `/businesses/search` - [Documentation](https://www.yelp.com/developers/documentation/v3/business_search)
Business Details: `/businesses/:id` - [Documentation](https://www.yelp.com/developers/documentation/v3/business)
Reviews: `/businesses/:id/reviews` - [Documentation](https://www.yelp.com/developers/documentation/v3/business_reviews)
