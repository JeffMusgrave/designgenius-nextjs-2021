import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Heading,
  Textarea,
  Input,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function ContactComponent(props) {
  return (
    <FullSection>
      <ContentConstrainer display="flex">
        <Stack>
          <Heading as="h2">Let's work together</Heading>
          <Text>We'd love to hear from you or something.</Text>
        </Stack>

        <HookForm />
      </ContentConstrainer>
    </FullSection>
  );
}

function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [thanks, setThanks] = useState(false);
  const thanksMsg = () => {
    setThanks(!thanks);
  };

  const onSubmit = (data, e) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xayajdev",
      data: data,
    });

    e.target.reset();
    thanksMsg();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <FormLabel htmlFor="mail">Message</FormLabel>

        <Textarea
          placeholder="Here is a sample placeholder"
          size="sm"
          {...register("message", {
            required: "This is required",
            minLength: { value: 10, message: "Minimum length should be 10" },
          })}
        />
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
