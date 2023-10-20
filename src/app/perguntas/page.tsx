'use client'

import { Suspense } from 'react';

import { ContentCards } from '@/components/contentCards';
import { FilterTable } from '@/components/filterTable';

import '../globals.css'

export default function Home() {
  const classAllDiv =
    'min-h-screen w-full flex justify-center items-start overflow-x-hidden px-32 py-12 pb-2 flex-wrap';
  const classSecondDivs = 'w-full flex justify-evenly gap-x-6';

  const { FilterTableComponent, anonimo, receiver, status, termo } = FilterTable();

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
        <Suspense fallback={<div>Carregando Increment...</div>}>
          {FilterTableComponent}
        </Suspense>
      </div>

      <Suspense fallback={<div>Carregando...</div>}>
        <ContentCards {...contentCardProps} />
      </Suspense>
    </div>
  );
}
