import { useForm } from "react-hook-form";
import axios from "axios";
import {
  chakra,
  useToast,
  Textarea,
  Input,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";

export default function ContactForm(props) {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data, e) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xayajdev",
      data: data,
    });

    e.target.reset();

    toast({
      position: "bottom",
      title: "Email Sent!",
      description: "Your email has been sent! Thank you!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box {...props}>
      <chakra.form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <VStack align="stretch" spacing={4}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="name"
              {...register("name", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
                pattern: {
                  value: /[A-Za-z]{2}/,
                  maxLength: 80,
                  message: "please type in a name",
                },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="email"
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <FormErrorMessage>
              {errors.mail && errors.mail.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message}>
            <FormLabel htmlFor="mail">Message</FormLabel>
            <Textarea
              placeholder="Please type your message here."
              size="sm"
              {...register("message", {
                required: "This is required",
                minLength: {
                  value: 10,
                  message: "Minimum length should be 10",
                },
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Button py={6} mt={6} isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </VStack>
      </chakra.form>
    </Box>
  );
}
