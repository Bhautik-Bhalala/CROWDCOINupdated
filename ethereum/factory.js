import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xF389E4E7D3881015448f4c54F731bFf7b74F1e6b"
);

export default instance;
