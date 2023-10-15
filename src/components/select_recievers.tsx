import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import prisma from '../lib/prisma';

interface SelectRecieversProps {
  receiver: string;
  setReceiver: (e: string) => void;
}
interface Recivers {
  name: string;
  id: string;
}

export default async function Select_Recievers({
  receiver,
  setReceiver,
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
