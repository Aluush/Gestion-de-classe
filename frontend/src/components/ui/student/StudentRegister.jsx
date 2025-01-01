import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StudentApi from "../../../services/api/student/StudentApi";

const formSchema = z.object({
  name: z.string().min(6).max(50),
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
});

export function StudentRegister() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async values => {
    try {
      await StudentApi.register(values.name, values.email, values.password);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const { errors } = error.response.data;
        Object.keys(errors).forEach(field => {
          form.setError(field, { message: errors[field][0] });
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Input placeholder="name" {...field} />
              <FormMessage>{form.formState.errors?.name?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input placeholder="email" {...field} />
              <FormMessage>{form.formState.errors?.email?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="password" {...field} />
              <FormMessage>{form.formState.errors?.password?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <Loader className="animate-spin" /> : "Se connecter"}
        </Button>
      </form>
    </Form>
  );
}
