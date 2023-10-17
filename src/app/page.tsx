'use client';

import { SelectPlaceholder } from '@/components/select_placeholder';
import Select_Recievers from '@/components/select_recievers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Suspense, useCallback, useState } from 'react';

export default function Home() {
  const [transmitter, setTransmitter] = useState('');
  const [receiver, setReceiver] = useState('clnrxxkcx0000l57c7bb4akly');
  const [question, setQuestion] = useState('');
  const [disabled, setDisabled] = useState(false);

  const onSubmit = useCallback(async () => {
    setDisabled(true);

    // Verificar se algum ta vazio
    // Tlvz colocar o formulario

    // await api.post('/question', {
    //   transmitter,
    //   reciverId: receiver,
    //   question,
    // });

    setTransmitter('');
    setReceiver('clnlpooa20000ix74skqamv64');
    setQuestion('');

    alert('Sua pergunta foi enviada com sucesso!');

    setTimeout(() => {
      setDisabled(false);
    }, 500);
  }, [
    transmitter,
    receiver,
    question,
    setDisabled,
    setTransmitter,
    setReceiver,
    setQuestion,
  ]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center overflow-x-hidden">
      <div
        className="w-[40rem] flex flex-wrap space-y-6 overflow-x-hidden px-1
          max-md:w-80 max-md:space-y-3">
        <div className="mb-20 text-center w-full max-sm:mb-4">
          <h1
            className="
              text-5xl font-bold text-green-500 
              max-md:text-4xl
            ">
            Congresso - Crer é Pensar
          </h1>
          <h2
            className="
                text-2xl font-semibold text-green-500
                max-md:text-xl
              ">
            Faça uma pergunta
          </h2>
        </div>

        <div className="space-y-2 flex flex-wrap w-full">
          <Label className="max-md:text-[12px]">Insira o seu nome:</Label>

          <Input
            className="rounded-xl h-12 
                        max-md:h-9 max-md:text-[10px]"
            placeholder="Insira o seu nome aqui"
            value={transmitter}
            onChange={(e) => setTransmitter(e.target.value)}
          />
          <small className="block text-xs text-muted-foreground leading-relaxed max-sm:text-[8px]">
            Caso você não informe a pergunta será anônima
          </small>
        </div>

        <Separator />

        <div className="space-y-2 flex flex-wrap w-full">
          <Label className="max-md:text-[12px]">Selecione para quem é a pergunta:</Label>

          <Suspense fallback={<SelectPlaceholder />}>
            <Select_Recievers receiver={receiver} setReceiver={setReceiver} />
          </Suspense>
        </div>

        <Separator />

        <div className="space-y-2 flex flex-wrap w-full">
          <Label className="max-md:text-[12px]">Insira a sua pergunta:</Label>

          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="resize-none p-4 leading-relaxed rounded-xl max-md:text-[10px]"
            placeholder="Insira sua pergunta..."
            rows={5}
          />
        </div>

        <Button
          disabled={disabled}
          onClick={onSubmit}
          variant="outline"
          className="rounded-xl h-12 ml-auto px-12 text-lg text-green-600
                  max-md:h-10 max-md:px-8 max-md:text-sm transition-all">
          {disabled ? 'Enviando...' : 'Enviar'}
        </Button>
      </div>
    </div>
  );
}
