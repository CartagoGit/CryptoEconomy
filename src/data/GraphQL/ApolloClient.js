import { ApolloClient, InMemoryCache } from "@apollo/client";
import { URL_BITQUERY } from "./constants";

export const client = new ApolloClient({
	uri: URL_BITQUERY,
	cache: new InMemoryCache(),
	connectToDevTools: true
});
