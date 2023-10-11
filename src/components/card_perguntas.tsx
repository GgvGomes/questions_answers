import { EyeIcon, LucideVerified, Copy } from 'lucide-react';
import { Separator } from './ui/separator';
import { useEffect, useState } from 'react';

interface Question {
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
}: Question) {
  const [visualizado, setVisualizado] = useState(viewed);

  useEffect(() => {
    setVisualizado(viewed);
  }, [viewed]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

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
            onClick={() => setVisualizado(!visualizado)}
            className="ml-auto cursor-pointer"
            color="green"
          />
        ) : (
          <EyeIcon
            size={32}
            onClick={() => setVisualizado(!visualizado)}
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
