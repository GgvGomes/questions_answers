import { useCallback, useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { api } from '@/data/axios';

interface SelectRecieversProps {
  receiver: string;
  setReceiver: (e: string) => void;
}
interface Recivers {
  name: string;
  id: string;
}

export function Select_Recievers({ receiver, setReceiver }: SelectRecieversProps) {
  const [receivers, setReceivers] = useState<Recivers[]>([]);
  
  const getRecivers = useCallback(async () => {
    const result = await api.get('/recivers');

    setReceivers(result.data);
  }, [setReceivers]);

  useEffect(() => {
    getRecivers();
  }, []);

  return (
    <Select onValueChange={(e) => setReceiver(e)} value={receiver}>
      <SelectTrigger className="rounded-xl h-12 max-md:h-9 max-md:text-[10px]">
        <SelectValue placeholder="Selecione uma opção" />
      </SelectTrigger>

      <SelectContent>
        {receivers?.map((item) => (
          <SelectItem value={item.id} key={item.id}>{item.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
