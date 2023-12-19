'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Lib
import { pageview } from '@/lib/utils/gtm';

/**
 * GTagEffect Component
 *
 * This component can be used if additional events need to be triggered on route change.
 *
 */
function GTagEffect() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// analytics trigger on page change
	useEffect(() => {
		const queryParams = searchParams.toString();
		// pageview(`${pathname}${queryParams ? '?' + queryParams : ''}`)
		pageview(pathname);
	}, [pathname, searchParams]);

	return null;
}

export default GTagEffect;
