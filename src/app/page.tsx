"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center overflow-x-hidden"
      //max-md:justify-start "
      // max-md:items-start max-md:mt-4"
    >
      <div
        className="w-[40rem] flex flex-wrap space-y-6 overflow-x-hidden px-1
          max-md:w-80 max-md:space-y-3"
        //max-md:ml-8"
      >
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
          />
          <small className="block text-xs text-muted-foreground leading-relaxed max-sm:text-[8px]">
            Caso você não informe a pergunta será anônima
          </small>
        </div>

        <Separator />

        <div className="space-y-2 flex flex-wrap w-full">
          <Label className="max-md:text-[12px]">Selecione para quem é a pergunta:</Label>

          <Select>
            <SelectTrigger className="rounded-xl h-12 max-md:h-9 max-md:text-[10px]">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value={"1"}>Todos</SelectItem>
              <SelectItem value={"2"}>Mauro Henrique</SelectItem>
              <SelectItem value={"3"}>Pastor Herley</SelectItem>
              <SelectItem value={"4"}>Pastor Gustavo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2 flex flex-wrap w-full">
          <Label className="max-md:text-[12px]">Insira a sua pergunta:</Label>

          <Textarea
            className="resize-none p-4 leading-relaxed rounded-xl max-md:text-[10px]"
            placeholder="Insira sua pergunta..."
            rows={5}
          />
        </div>

        <Button
          variant="outline"
          className="rounded-xl h-12 ml-auto px-12 text-lg text-green-700
                  max-md:h-10 max-md:px-8 max-md:text-sm">
          Enviar
        </Button>
      </div>
    </div>
  );
}
