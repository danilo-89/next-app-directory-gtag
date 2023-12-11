'use client';

import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import Script from 'next/script';
import { getCookie } from 'cookies-next';

type GTagContextArgs = {
	consent: boolean;
	setConsent: Dispatch<SetStateAction<boolean>> | null;
};

export const GTagContext = createContext<GTagContextArgs>({
	consent: false,
	setConsent: null,
});

interface GTagProviderProps {
	tagId: string | undefined;
	children: React.ReactNode;
}

export const GTagProvider = ({ tagId, children }: GTagProviderProps) => {
	const localConsent = getCookie('localConsent');
	const [consent, setConsent] = useState(false);

	useEffect(() => {
		setConsent(localConsent === 'true');
	}, [localConsent]);

	return (
		<GTagContext.Provider value={{ consent, setConsent }}>
			<Script
				id='gtag-base'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);};`,
				}}
			/>

			{consent && tagId ? (
				<Script
					id='gtag-base-update'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
						gtag('consent', 'default', {
							'ad_storage': 'denied',
							'analytics_storage': 'denied'
						});

						gtag('consent', 'update', {
							ad_storage: 'granted',
							analytics_storage: 'granted',
						});
						
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${tagId}')`,
					}}
				/>
			) : null}
			{children}
		</GTagContext.Provider>
	);
};

export const useGTag = () => {
	const context = useContext(GTagContext);
	if (context === undefined) {
		throw new Error('useGTag must be used within a GTagProvider');
	}
	return context;
};
