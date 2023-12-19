import { type ReactNode } from 'react';

// Components
import ConsentDialog from '@/components/ConsentDialog';

function template({ children }: { children: ReactNode }) {
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			{children}
			<ConsentDialog />
		</main>
	);
}

export default template;
