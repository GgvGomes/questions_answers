'use client';

import { api } from '@/data/axios';
import { useCallback, useState } from 'react';
import { EyeIcon, LucideVerified, Copy } from 'lucide-react';
import { Separator } from './ui/separator';

interface Question {
  id: number;
  data: string;
  transmitter: string;
  reciver: string;
  viewed: boolean;
  question: string;
}

export function Card_Perguntas({
  data,
  transmitter,
  reciver,
  question,
  viewed,
  id,
}: Question) {
  const [visualizado, setVisualizado] = useState(viewed);

  const copyToClipboard = () =>
    navigator.clipboard.writeText('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  const changeView = useCallback(
    async (visualizado: boolean) => {
      await api.post(`/view/${id}`, { viewed: visualizado }).then((res) => {
        console.log(res.data);

        alert('Visualização alterada com sucesso!');
        setVisualizado(visualizado);
      });
    },
    [setVisualizado, visualizado]
  );

  return (
    <div className="border-solid border-[2px] border-zinc-600 w-full h-[28%] rounded-xl p-4">
      <div
        id="infos"
        className="flex px-2 pb-2 justify-center center items-center relative">
        <span id="data" className="mr-10 text-muted-foreground">
          {data}
        </span>
        <span id="nome">{transmitter}</span>

        <span className="m-auto absolute font-bold text-lg mt-[-2px]">{reciver}</span>

        {visualizado ? (
          <LucideVerified
            size={32}
            onClick={() => changeView(!visualizado)}
            className="ml-auto cursor-pointer"
            color="green"
          />
        ) : (
          <EyeIcon
            size={32}
            onClick={() => changeView(!visualizado)}
            className="ml-auto cursor-pointer"
          />
        )}

        <Copy
          className="ml-6 mt-[4px] cursor-pointer text-muted-foreground"
          onClick={copyToClipboard}
        />
      </div>

      <Separator className="w-full" />

      <p className="p-4 leading-relaxed font-semibold">{question}</p>
    </div>
  );
}
