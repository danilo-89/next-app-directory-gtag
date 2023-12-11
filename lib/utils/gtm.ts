export const pageview = (url: string) =>
	window.gtag('event', 'page_view', {
		// page_title: '<Page Title>',
		// page_location: '<Page Location>',
		page_path: url,
		send_to: process.env.GTAG_ID,
	});
