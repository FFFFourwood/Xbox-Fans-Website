import { InjectedConnector } from '@web3-react/injected-connector';

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 137 ]
});

