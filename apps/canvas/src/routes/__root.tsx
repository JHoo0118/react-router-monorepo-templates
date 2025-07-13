import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/queryClient';
import { useScrollToTop } from '@/shared/hooks';

const RootComponent = () => {
  useScrollToTop();

    return (
        <QueryClientProvider client={queryClient}>
          <main>
            <Outlet />
          </main>
          <TanStackRouterDevtools />
        </QueryClientProvider>
    );
  };
  
  export const Route = createRootRoute({
    component: RootComponent,
  });
  