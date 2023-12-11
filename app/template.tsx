import ConsentDialog from '@/components/ConsentDialog';
import { type ReactNode } from 'react';

function template({ children }: { children: ReactNode }) {
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			{children}
			<ConsentDialog />
		</main>
	);
}

export default template;
