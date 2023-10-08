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
  }, [viewed])

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  return (
    <div className="border-solid border-[2px] border-zinc-600 w-full h-[28%] rounded-xl p-4">
      <div id="infos" className="flex px-2 pb-2">
        <span id="data" className="mr-10 text-muted-foreground">
          {data}
        </span>
        {/* <div id="nome">Anônimo</div> */}
        <span id="nome" >
          {transmitter}
        </span>

        <span className="m-auto font-bold text-lg mt-[-2px]">{reciver}</span>

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
        {/* Melhorar a cor do verificado */}

        <Copy
          className="ml-6 mt-[4px] cursor-pointer text-muted-foreground"
          onClick={copyToClipboard}
        />
      </div>

      <Separator className="w-full" />

      <p className="p-4 leading-relaxed font-semibold">
        {question}
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum */}
      </p>
    </div>
  );
}
