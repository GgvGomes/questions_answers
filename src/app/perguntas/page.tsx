'use client';

import Select_Recievers from '@/components/select_recievers';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Suspense, useState } from 'react';

import { ContentCards } from '@/components/contentCards';
import { SelectPlaceholder } from '@/components/select_placeholder';

export default function Home() {
  const classDivLabel = 'space-y-2 flex flex-wrap w-full ';
  const classInputs = 'rounded-xl h-12';
  const classAllDiv =
    'min-h-screen w-full flex justify-center items-start overflow-x-hidden px-32 py-12 pb-2 flex-wrap';
  const classSecondDivs = 'w-full flex justify-evenly gap-x-6';

  const [termo, setTermo] = useState('');
  const [receiver, setReceiver] = useState('');
  const [status, setStatus] = useState('');
  const [anonimo, setAnonimo] = useState('');

  const contentCardProps = {
    termo,
    receiver,
    status,
    anonimo,
  };

  return (
    <div className={classAllDiv}>
      {/* Filtro */}
      <div className={classSecondDivs}>
        <div className={`${classDivLabel}`}>
          <Label>Pesquisa por termo</Label>
          <Input
            onChange={(e) => setTermo(e.currentTarget.value)}
            className={`${classInputs}`}
            placeholder="Digite alguma coisa para filtrar"
          />
        </div>

        <div className={`${classDivLabel}`}>
          <Label>Selecione a quem foi destinada</Label>

          <Suspense fallback={<SelectPlaceholder />}>
            <Select_Recievers receiver={receiver} setReceiver={setReceiver} />
          </Suspense>
        </div>

        <div className={`${classDivLabel}`}>
          <Label>Status de leitura</Label>
          <Select onValueChange={(e) => setStatus(e)}>
            <SelectTrigger className="rounded-xl h-12 max-md:h-9 max-md:text-[10px]">
              <SelectValue placeholder="Selecione um status de leitura" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value={''}>Todos</SelectItem>
              <SelectItem value={'0'}>Não visualizado</SelectItem>
              <SelectItem value={'1'}>Visualizado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className={`${classDivLabel}`}>
          <Label>Anônima ou Identificada</Label>
          <Select onValueChange={(e) => setAnonimo(e)}>
            <SelectTrigger className="rounded-xl h-12 max-md:h-9 max-md:text-[10px]">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value={''}>Todos</SelectItem>
              <SelectItem value={'0'}>Anônimas</SelectItem>
              <SelectItem value={'1'}>Identificadas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Suspense fallback={<div>Carregando...</div>}>
        <ContentCards {...contentCardProps} />
      </Suspense>
    </div>
  );
}
