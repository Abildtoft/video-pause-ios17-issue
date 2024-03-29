import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'dk.consensus.com.ios17videoissue',
	appName: 'Video Issue',
	webDir: 'www',
	server: {
		androidScheme: 'https',
		iosScheme: 'co-connect',
	},
	ios: {
		preferredContentMode: 'mobile',
	},
};

export default config;
