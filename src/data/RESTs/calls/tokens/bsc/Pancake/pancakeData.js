const Pancake = require("../../../../lib/tokens/bsc/Pancake/PancakeLib");

//2. Initiate the CoinGecko API Client
const PancakeClient = new Pancake();

//3. Make calls
export const getAllFromPancakeByMarket = async () => {
	const res = await PancakeClient.tokens.byAddress({id: '0x31471e0791fcdbe82fbf4c44943255e923f1b794'});
	const data = res.data;
	return data;
};