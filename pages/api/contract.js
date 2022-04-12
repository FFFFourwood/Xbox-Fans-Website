import { Contract } from '@ethersproject/contracts';
export const contractAbi = ['合约ABI'] //合约abi
export const contractAddress = '合约地址' //合约地址';

export const getContract = (library, account) => {
	let signer = library.getSigner(account).connectUnchecked();
	var contract = new Contract(contractAddress, contractAbi, signer);
	return contract;
};