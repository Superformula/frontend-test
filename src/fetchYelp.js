export const fetchYelp = async query => {
  const res = await fetch('/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'Authorization': `Bearer ${process.env.YELP_KEY}`,
      'Accept-Language': "en_US"
    },
    body: query,
  });

  const json = await res.json();
  return json.data;
};