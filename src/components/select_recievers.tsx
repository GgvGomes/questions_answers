import { useMemo } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { api } from '@/lib/axios';
interface Recivers {
  name: string;
  id: string;
}

interface SelectRecieversProps {
  receiver: string;
  setReceiver: (e: string) => void;
}

async function getRecivers() {
  const response = await api.get('/recivers').then((res) => res.data);

  return response;
}

export default async function Select_Recievers({
  receiver,
  setReceiver,
}: SelectRecieversProps) {
  const recivers: Recivers[] = await useMemo(() => {
    return getRecivers();
  }, []);

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