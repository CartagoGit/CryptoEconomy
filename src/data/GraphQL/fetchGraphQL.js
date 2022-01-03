import { gql } from "@apollo/client";
// import fetch from "cross-fetch";

export const getGraphQLBitQuery = () => {
	// const query = gql`
	// 	{
	// 		BSC: ethereum(network: bsc) {
	// 			dexTrades(
	// 				quoteCurrency: { is: "0x55d398326f99059ff775485246999027b3197955" }
	// 				options: {
	// 					limit: 25
	// 					desc: ["block.height", "tradeIndex"]
	// 					limitBy: { each: "baseCurrency.address", limit: 1 }
	// 				}
	// 				exchangeName: { in: ["Pancake", "Pancake v2"] }
	// 			) {
	// 				block {
	// 					height
	// 					timestamp {
	// 						iso8601
	// 					}
	// 				}
	// 				tradeIndex
	// 				baseCurrency {
	// 					address
	// 					name
	// 					symbol
	// 					tokenId
	// 				}
	// 				quoteCurrency {
	// 					symbol
	// 				}
	// 				protocol
	// 				smartContract {
	// 					currency {
	// 						name
	// 						symbol
	// 					}
	// 				}
	// 				quotePrice
	// 			}
	// 		}
	// 	}
	// `;
    const query =`
		{
			BSC: ethereum(network: bsc) {
				dexTrades(
					quoteCurrency: { is: "0x55d398326f99059ff775485246999027b3197955" }
					baseCurrency: { is: "0xe0191fefdd0d2b39b1a2e4e029ccda8a481b7995" }
					options: {
						limit: 10
						desc: ["block.height", "tradeIndex"]
						limitBy: { each: "baseCurrency.address", limit: 1 }
					}
					
				) {
					block {
						height
						timestamp {
							iso8601
						}
					}
					tradeIndex
					baseCurrency {
						address
						name
						symbol
						tokenId
					}
					quoteCurrency {
						symbol
					}
					protocol
					smartContract {
						currency {
							name
							symbol
						}
					}
					quotePrice
				}
			}
		}
	`;
    // console.log(query);
	const url = "https://graphql.bitquery.io/";
	const opts = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-API-KEY": "BQYLG0hVoVvZDGaTBRPvdJhmBnaizHnl"
		},
		body: JSON.stringify({
			// query : query.loc?.source.body
			query 
		})
	};
	return fetch(url, opts)
		.then((res) => res.json())
		.catch(console.error);
};
