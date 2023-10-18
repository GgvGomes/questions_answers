'use client';

import { SelectPlaceholder } from '@/components/select_placeholder';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { api } from '@/lib/axios';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import './globals.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

async function getRecivers() {
  const response = await api.get('/recivers').then((res) => res.data);

  return response;
}

const formSchema = z.object({
  transmitter: z.string(),
  receiver: z.string().min(2, {
    message: 'Selecione uma opção.',
  }),
  question: z.string().min(2, {
    message: 'Insira alguma pergunta.',
  }),
});

type FormValues = z.infer<typeof formSchema>;
async function SendQuestion({ transmitter, receiver, question }: FormValues) {
  const response = await api.post('/question', {
    transmitter,
    reciverId: receiver,
    question,
  });

  console.log(response);
}
interface Recivers {
  name: string;
  id: string;
}

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transmitter: '',
      question: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: FormValues) {
    SendQuestion(values);

    console.log(values);
    alert('Sua Pergunta foi enviada!');
    form.reset();
  }

  const [recivers, setRecivers] = useState<Recivers[]>([]);
  useEffect(() => {
    getRecivers()
      .then((res) => setRecivers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen h-full w-full flex justify-center items-center overflow-x-hidden">
      <div
        className="w-[40rem] h-full max-h-[100%] flex flex-wrap overflow-x-hidden px-1
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

        <Form {...form}>
          <form className="w-full space-y-6 grid" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="transmitter"
              render={({ field }) => (
                <FormItem className="space-y-2 flex flex-wrap w-full">
                  <FormLabel>Insira o seu nome:</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-xl h-12 
                        max-md:h-10 max-md:text-[12px]"
                      placeholder="Insira o seu nome aqui"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Caso você não informe a pergunta será anônima
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="receiver"
              render={({ field }) => (
                <FormItem className="space-y-2 flex flex-wrap w-full">
                  <FormLabel>Selecione para quem é a pergunta:</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="rounded-xl h-12 max-md:h-10 max-md:text-[12px]">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>

                      <SelectContent>
                        {recivers?.map((item) => (
                          <SelectItem value={item.id} key={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                        {/* <SelectItem value={'clnlpooa20000ix74skqamv64'}>Todos</SelectItem>
                        <SelectItem value={'Mauro'}>Mauro Henrique</SelectItem> */}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="space-y-2 flex flex-wrap w-full">
                  <FormLabel>Insira a sua pergunta:</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none p-4 leading-relaxed rounded-xl max-md:text-[12px]"
                      placeholder="Insira sua pergunta..."
                      rows={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="outline"
              disabled={form.formState.isSubmitting}
              className="rounded-xl h-12 ml-auto self-end px-12 text-lg text-green-600
                  max-md:h-11 max-md:px-8 max-md:text-[16px] transition-all">
              {form.formState.isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
