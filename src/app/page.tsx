"use client";

import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-80 flex flex-wrap space-y-6">
        <div className="space-y-2 flex flex-wrap">
          <Label>Selecione a quem você direcionará a pergunta</Label>

          <Select>
            <SelectTrigger className="rounded-xl h-12">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value={"1"}>Todos</SelectItem>
              <SelectItem value={"1"}>Mauro Henrique</SelectItem>
              <SelectItem value={"2"}>Pastor 1</SelectItem>
              <SelectItem value={"3"}>Tuti</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2 flex flex-wrap">
          <Label>Escreva sua pergunta</Label>

          <Textarea
            className="resize-none p-4 leading-relaxed rounded-xl"
            placeholder="Inclua o prompt para a IA..."
            rows={5}
          />
        </div>

        <Button variant="outline" className="rounded-xl h-12 ml-auto px-8">
          Enviar
        </Button>
      </div>
    </div>
  );
}
