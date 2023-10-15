'use client';

import { Card_Perguntas } from '@/components/card_perguntas';
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
import { api } from '@/data/axios';
import { filterData } from '@/functions/filter';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { addHours, format } from 'date-fns';

interface Question {
  reciver: {
    name: string;
  };
  id: string;
  question: string;
  viewed: boolean;
  data: Date;
  transmitter: string | null;
  reciverId: string;
}

// subtrair 3h da data
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

  const [questions, setQuestions] = useState<Question[]>([]);

  const getQuestions = useCallback(async () => {
    const { data } = await api.get('/questions');
    setQuestions(data);
  }, [setQuestions]);

  useEffect(() => {
    getQuestions();
  }, []);

  // Sempre ordenar da menor data p/ a maior
  const questionsMemo = useMemo(() => {
    let questionsFiltered = filterData(questions, termo);

    let statusBoolean = false;
    if (status === '0') statusBoolean = false;
    else if (status === '1') statusBoolean = true;

    if (receiver !== '')
      questionsFiltered = questionsFiltered.filter((item) =>
        item.reciver.includes(receiver)
      );

    if (status !== '')
      questionsFiltered = questionsFiltered.filter(
        (item) => item.viewed == statusBoolean
      );

    if (anonimo !== '') {
      if (anonimo === '0')
        questionsFiltered = questionsFiltered.filter(
          (item) => item.transmitter == 'Anônimo'
        );
      else if (anonimo === '1')
        questionsFiltered = questionsFiltered.filter(
          (item) => item.transmitter !== 'Anônimo'
        );
    }

    return questionsFiltered.map((item) => ({
      reciver: item.reciver.name,
      id: item.id,
      data: format(new Date(item.data), 'dd/MM HH:mm'),
      transmitter: item.transmitter,
      question: item.question,
      viewed: item.viewed,
    }));
  }, [termo, receiver, status, anonimo, questions]);

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

          <Select_Recievers receiver={receiver} setReceiver={setReceiver} />
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

      {/* Div Cards Perguntas */}

      <div
        className={`${classSecondDivs} px-4 py-2 h-[80vh] max-h-[80vh] overflow-auto flex-wrap gap-y-3 content-start`}>
        {questionsMemo.map((item, i) => (
          <Card_Perguntas {...item} key={i} />
        ))}
      </div>

      <small className="ml-auto text-muted-foreground font-semibold">
        Mostrando {questionsMemo.length} de {questions.length} perguntas
      </small>
    </div>
  );
}
