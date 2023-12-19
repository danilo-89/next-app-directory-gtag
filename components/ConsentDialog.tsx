'use client';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { useGTag } from '@/context/GTagContext';

function ConsentDialog() {
	const windowGlobal = typeof window !== 'undefined' && window;
	const [showDialog, setShowDialog] = useState(true);
	const { setConsent } = useGTag();

	useEffect(() => {
		if (windowGlobal) {
			const localConsent = getCookie('localConsent');
			console.log({ localConsent });

			setShowDialog(localConsent ? false : true);
		}
	}, [windowGlobal]);

	if (showDialog)
		return (
			<div className='w-full fixed bottom-0 bg-slate-700/90 py-3 px-5 flex items-center'>
				<div className='max-w-[50rem] pr-5'>
					<h3 className='font-bold mr-2 text-lg mb-2'>Consent Notice</h3>
					<p className='text-slate-200'>
						By clicking &apos;Allow Cookies&apos;, you agree to the use of
						cookies on our website to provide a personalized experience,
						understand how you interact with our site, and for analytical
						purposes.
					</p>
				</div>

				<button
					className='px-4 py-2 ml-auto border rounded-lg border-white block hover:bg-slate-800'
					type='button'
					onClick={() => {
						setCookie('localConsent', true);
						setShowDialog(false);
						setConsent?.(true);
					}}
				>
					Allow Cookies
				</button>
			</div>
		);

	return null;
}

export default ConsentDialog;
