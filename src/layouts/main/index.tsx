import { QueryClient, QueryClientProvider } from 'react-query';
import ModalProvider from '@/src/contexts/Modal/ModalProvider';
import { PokemonList } from '@/src/features/PokemonList';
import { PokemonModal } from '@/src/features/PokemonModal';

const queryClient = new QueryClient();

const Main = () => {
  return (
    <main className="m-auto max-w-[1440px]">
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <PokemonModal />
        </QueryClientProvider>
        <PokemonList />
      </ModalProvider>
    </main>
  );
};

export default Main;
