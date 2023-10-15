import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
interface Recivers {
  name: string;
  id: string;
}

interface SelectRecieversProps {
  receiver: string;
  setReceiver: (e: string) => void;
  // recivers?: Recivers[];
}

// export const getServerSideProps = async ({ req }) => { }
// export const getStaticProps: GetStaticProps = async () => {
//   const recivers = await prisma.recivers.findMany();
  
//   return { props: { recivers } }
// };

export default async function Select_Recievers({
  receiver,
  setReceiver
}: SelectRecieversProps) {
  const recivers: Recivers[] = await prisma.recivers.findMany();
  // const [receivers, setReceivers] = useState<>([]);

  // const getRecivers = useCallback(async () => {
  //   const result = await getReciversPrisma();

  //   setReceivers(result.data);
  // }, [setReceivers]);

  // useEffect(() => {
  //   getRecivers();
  // }, []);

  return (
    <Select onValueChange={(e) => setReceiver(e)} value={receiver}>
      <SelectTrigger className="rounded-xl h-12 max-md:h-9 max-md:text-[10px]">
        <SelectValue placeholder="Selecione uma opção" />
      </SelectTrigger>

      <SelectContent>
        {recivers?.map((item) => (
          <SelectItem value={item.id} key={item.id}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// Select_Recievers.getInitialProps = async (
//   context: AppContext
// ): Promise<SelectRecieversProps & AppInitialProps> => {
//   const ctx = await App.getInitialProps(context)
//   const recivers = await prisma.recivers.findMany();

//   return { ...ctx }
// }