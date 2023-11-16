import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'dk.consensus.com.ios17-video-issue',
	appName: 'Video Issue',
	webDir: 'www',
	server: {
		androidScheme: 'https',
		iosScheme: 'co-connect',
	},
};

export default config;
