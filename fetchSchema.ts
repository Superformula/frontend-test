import fs from "fs";
import {
  buildClientSchema,
  GraphQLSchema,
  printIntrospectionSchema,
  getIntrospectionQuery,
} from "graphql";
import got from "got";

/**
 * A simple solution for the fetching of the yelp api
 * schema for later typescript codegen. I tried using
 * grqpahl-codegen's custom loaders but it didn't work
 * so I resorted to out of band fetching.
 *
 * This will store the schema in schema.json and that
 * will be read by the code gen process, it is actually
 * probably not needed to run this very often
 */
export default async function fetchSchema(): Promise<GraphQLSchema> {
  const url = process.env.YELP_GRAPHQL_URI;

  const response = await got(url!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
    json: {
      query: getIntrospectionQuery(),
    },
  }).json();

  const data = (response as any)?.data;
  const schema = buildClientSchema(data);

  // const schemaString = printIntrospectionSchema(schema)

  fs.writeFileSync("./schema.json", JSON.stringify(data));

  return schema;
}

fetchSchema().then(console.log, console.error);
