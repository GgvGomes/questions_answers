import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  text: string;
}

export function Modal({ isModalOpen, setIsModalOpen, text }: ModalProps) {
  useEffect(() => {
    const container = document.querySelector('.container');
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    if (isModalOpen) {
      // Fecha o modal quando o botão ESC for pressionado
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setIsModalOpen(false);
      });

      container?.classList.add('blur-xl');
    } else 
      container?.classList.remove('blur-xl');
    
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-800 opacity-60 z-10 blur-0">
          <div className="bg-gray-900 rounded-xl border-primary-foreground grid">
            <p className="text-white font-bold text-lg p-10 pl-4 pr-40">{text}</p>

            <Button
              className="p-4 bg-muted-foreground ml-auto mr-4 mb-4 rounded-xl"
              onClick={() => setIsModalOpen(false)}>
              Fechar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
