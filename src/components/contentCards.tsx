import { Suspense, useEffect, useMemo, useState } from 'react';
import { filterData } from '@/functions/filter';
import { api } from '@/lib/axios';

import { Card_Perguntas } from './card_perguntas';
import { format } from 'date-fns';

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

async function getQuestionsBd() {
  const response = await api.get('/questions').then((res) => res.data);
  console.log(response);

  return response;
}

interface ContentCardsProps {
  termo: string;
  receiver: string;
  status: string;
  anonimo: string;
}

export async function ContentCards({
  anonimo,
  receiver,
  status,
  termo,
}: ContentCardsProps) {
  const classSecondDivs = 'w-full flex justify-evenly gap-x-6';

  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    getQuestionsBd()
      .then((res) => setQuestions(res))
      .catch((err) => console.log(err));
  }, []);

  // Sempre ordenar da menor data p/ a maior
  const questionsMemo = useMemo(() => {
    let questionsFiltered = filterData(questions, termo);

    let statusBoolean = false;
    if (status === '0') statusBoolean = false;
    else if (status === '1') statusBoolean = true;

    if (receiver !== '')
      questionsFiltered = questionsFiltered.filter((item) =>
        item.reciverId == receiver
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
      key: item.id,
    }));
  }, [questions, termo, receiver, status, anonimo]);

  return (
    <>
      <div
        className={`${classSecondDivs} px-4 py-2 h-[80vh] max-h-[80vh] overflow-auto flex-wrap gap-y-3 content-start`}>
        <Suspense fallback={<div>Carregando...</div>}>
          {questionsMemo.map((item, i) => (
            <Card_Perguntas {...item} key={i} />
          ))}
        </Suspense>
      </div>

      <small className="ml-auto text-muted-foreground font-semibold">
        Mostrando {questionsMemo.length} de {questions.length} perguntas
      </small>
    </>
  );
}
