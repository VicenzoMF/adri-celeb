"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Section } from "./Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";

const formSchema = zod.object({
  name: zod.string().nonempty(),
  email: zod.string().email({
    message: "Por favor, insira um e-mail válido",
  }),
  dob: zod.date().min(new Date("1900-01-01"), {
    message: "Please select a date of birth",
  }),
  messageField: zod.string().nonempty(),
});

export function Contact() {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      messageField: "",
    },
  });

  function handleSubmit(data: zod.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div id="contact">

      <Section.Root variant="bottom">
        <Section.Title>Contato</Section.Title>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 max-w-[640px] mx-auto space-y-2">
            <div className="flex mx-auto gap-8">

              <div className="flex flex-col space-y-4 min-w-[300px]">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <Label>Nome</Label>
                        <FormControl>
                          <Input placeholder="Ex: Adriana Frusciante" className="ring-1 ring-black" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                  />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <Label>Email</Label>
                        <FormControl>
                          <Input placeholder="Ex: adrianafrusciante@gmail.com" className="ring-1 ring-black" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                  />   
              </div>

              <div className="min-w-[300px]">
              <FormField
                  control={form.control}
                  name="messageField"
                  render={({ field }) => {
                    return (
                      <FormItem className="h-full">
                        <Label>Mensagem</Label>
                        <FormControl>
                          <Textarea placeholder="Digite sua mensagem..." className="ring-1 ring-black resize-none h-5/6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                  />
              </div>
            </div>


            <Button variant="default" type="submit" className="w-auto bg-slate-700">
              Enviar
            </Button>

          </form>
        </Form>
      </Section.Root>
    </div>
  );
}
