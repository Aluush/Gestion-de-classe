import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import { Loader } from "lucide-react";
import { useUserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
});

export function StudentLogin() {
  const { login, authenticated } = useUserContext();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "aliatattou@gmail.com",
      password: "12345678"
    },
  });

  useEffect(() => {
    if (authenticated) {
      navigate("/student/dashboard");
    }
  }, [authenticated, navigate]);

  const { isSubmitting } = form.formState;

  const onSubmit = async values => {
    try {
      await login(values.email, values.password);
      navigate('/student/dashboard');
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-4 container p-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input placeholder="email" {...field} />
              <FormMessage>{form.errors?.email?.message}</FormMessage>
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
              <FormMessage>{form.errors?.password?.message}</FormMessage>
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
