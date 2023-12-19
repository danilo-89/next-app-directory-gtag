# NextJS (with App Router) gtag example

This project serves as a basic showcase for implementing Next.js (App Router) with the incorporation of Google Tag Manager to handle Google Tag and Cookie Consent functionalities.

Approach used in this example ensures that gtm script is not injected and no data is sent to google tag manager until user consent for cookies has been granted

## Environment Variable

Set the GTAG_ID environment variable in your project with your Google Tag Manager ID.

## Basic usage example

**layout.tsx**

```javascript
export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html lang='en'>
			<GTagProvider tagId={process.env.GTAG_ID}>
				<body>{children}</body>
			</GTagProvider>
		</html>
	);
}
```

**template.tsx**

```javascript
import { type ReactNode } from 'react';

import ConsentDialog from '@/components/ConsentDialog';

function template({ children }: { children: ReactNode }) {
	return (
		<main>
			{children}
			<ConsentDialog />
		</main>
	);
}

export default template;
```
