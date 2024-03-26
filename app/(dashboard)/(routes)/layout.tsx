'use client';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { ClickProvider } from '@/contexts/ContextProviders';

import NavBar from '@/components/common/NavBar';
import SideBar from '@/components/common/SideBar';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/' ?? '',
});

const authLink = setContext((_, { headers }) => {
  const header: any = {
    ...headers,
    'Apollo-Require-Preflight': 'true',
  };

  return {
    headers: {
      ...header,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ClickProvider>
        <section className="h-full relative w-full">
          <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 w-[16rem] overflow-y-auto">
            <div>
              <SideBar />
            </div>
          </div>

          <div className="md:ml-[16rem]">
            <NavBar />
            {children}
          </div>
        </section>
      </ClickProvider>
    </ApolloProvider>
  );
};

export default DashboardLayout;
