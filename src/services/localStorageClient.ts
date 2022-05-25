interface BottleTrackerClient {
	getOuncesLeft: () => Promise<number>;
	addOunces: (ounces: number) => Promise<void>;
	removeOunces: (ounces: number) => Promise<void>;

}
const LocalStorageClient: BottleTrackerClient = {
	getOuncesLeft: () => {
		const data = localStorage.getItem('ounces-left');
		const ouncesLeft = data != null ? +data : 0;
		return Promise.resolve(ouncesLeft);
	},
	addOunces: (ounces: number) => {
		const data = localStorage.getItem('ounces-left');
		const ouncesLeft = data != null ? +data : 0;
		const newOunces = ouncesLeft + ounces;
		localStorage.setItem('ounces-left', newOunces.toString());
		return Promise.resolve();
	},
	removeOunces: (ounces: number) => {
		const data = localStorage.getItem('ounces-left');
		const ouncesLeft = data != null ? +data : 0;
		const newOunces = ouncesLeft - ounces;
		localStorage.setItem('ounces-left', newOunces.toString());
		return Promise.resolve();
	},
};

export default LocalStorageClient;