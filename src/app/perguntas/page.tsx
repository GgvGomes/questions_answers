'use client';

import { Card_Perguntas } from '@/components/card_perguntas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  const classDivLabel = 'space-y-2 flex flex-wrap w-full ';
  const classInputs = 'rounded-xl h-12';
  const classAllDiv =
    'min-h-screen w-full flex justify-center items-start overflow-x-hidden px-32 py-12 pb-2 flex-wrap';
  const classSecondDivs = 'w-full flex justify-evenly gap-x-6';

  return (
    <div className={classAllDiv}>
      {/* Filtro */}
      <div className={classSecondDivs}>
        <div className={`${classDivLabel}`}>
          <Label>Pesquisa por termo</Label>
          <Input
            className={`${classInputs}`}
            placeholder="Digite alguma coisa para filtrar"
          />
        </div>

        <div className={`${classDivLabel}`}>
          <Label>Selecione a quem foi destinada</Label>
          <Input
            className={`${classInputs}`}
            placeholder="Digite alguma coisa para filtrar"
          />
        </div>

        <div className={`${classDivLabel}`}>
          <Label>Status de leitura</Label>
          <Input
            className={`${classInputs}`}
            placeholder="Digite alguma coisa para filtrar"
          />
        </div>

        <div className={`${classDivLabel}`}>
          <Label>Anônima ou Identificada</Label>
          <Input
            className={`${classInputs}`}
            placeholder="Digite alguma coisa para filtrar"
          />
        </div>
      </div>

      {/* Div Cards Perguntas */}

      <div
        className={`${classSecondDivs} px-4 py-2 h-[80vh] max-h-[80vh] overflow-auto flex-wrap gap-y-3`}>
        <Card_Perguntas />
        <Card_Perguntas />
        <Card_Perguntas />
        <Card_Perguntas />
      </div>

      <small className='ml-auto text-muted-foreground font-semibold'>Mostrando 4 de 4 perguntas</small>
    </div>
  );
}
