import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import clsx from "clsx";
import { useUnit } from "effector-react";
import {
  FieldWrapper,
  Label,
  InputGroup,
  Input,
  Textarea,
  Checkbox,
} from "@/shared/ui/fields";
import { Button, Spinner } from "@/shared/ui";
import {
  Input as InputProps,
  Textarea as TextareaProps,
} from "@/shared/types/element";
import { ApplicationBody } from "@/shared/types/api";
import { $pending, formSubmitted } from "./model";
import { api } from "@/shared/api";
import Image from "next/image";
import uploadIcon from "@/../public/images/upload-icon.svg";

interface FormValues extends ApplicationBody {
  policy: boolean;
}

export const CareerApplicationForm = () => {
  const form = useForm<FormValues>();
  const onSubmitted = useUnit(formSubmitted);

  const submit = async () => {
    const body = form.getValues();
    // @ts-ignore
    delete body["policy"];
    onSubmitted({ value: body });
  };

  return (
    <form onSubmit={form.handleSubmit(submit)}>
      <div className="mx-auto mt-16 flex max-w-[480px] flex-col gap-y-6">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
          <FirstNameField
            invalid={Boolean(form.formState.errors.first_name)}
            {...form.register("first_name", { required: true })}
          />
          <LastNameField
            invalid={Boolean(form.formState.errors.last_name)}
            {...form.register("last_name", { required: true })}
          />
        </div>
        <EmailField
          invalid={Boolean(form.formState.errors.email)}
          {...form.register("email", { required: true })}
        />
        <PhoneField
          invalid={Boolean(form.formState.errors.phone)}
          {...form.register("phone", {
            required: true,
            validate: (value) => {
              return value.replaceAll(/\D/g, "").length === 9;
            },
          })}
        />
        <MessageField
          invalid={Boolean(form.formState.errors.message)}
          {...form.register("message", { required: true })}
        />
        <FileUploadField
          invalid={Boolean(form.formState.errors?.file)}
          {...form.register("file", { required: true })}
        />
        <PolicyField
          invalid={Boolean(form.formState.errors.policy)}
          {...form.register("policy", { validate: (value) => value === true })}
        />
        <SubmitButton />
      </div>
    </form>
  );
};

interface FieldProps {
  invalid: boolean;
}

export const FirstNameField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="firstName">First name</Label>
    <Input
      ref={ref}
      id="firstName"
      placeholder="First name"
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const LastNameField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="lastName">Last name</Label>
    <Input
      ref={ref}
      id="lastName"
      placeholder="Last name"
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const EmailField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="email">Email</Label>
    <Input
      ref={ref}
      type="email"
      id="email"
      placeholder="you@company.com"
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const PhoneField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="phone">Phone number</Label>
    <InputGroup className={clsx(invalid && "!border-error-600")}>
      <span>+998</span>
      <InputMask
        id="phone"
        mask="(99) 999-99-99"
        placeholder="(00) 000-00-00"
        {...props}>
        <Input ref={ref} />
      </InputMask>
    </InputGroup>
  </FieldWrapper>
));

export const MessageField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="message">Message</Label>
    <Textarea
      ref={ref}
      id="message"
      placeholder="Leave us a message..."
      className={clsx("h-[134px]", invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const FileUploadField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper className="!flex-col items-center justify-center rounded-md border border-solid border-[#D0D5DD] p-6 text-center">
    <div className="flex flex-col items-center gap-y-2">
      <Image src={uploadIcon} alt="upload" className="h-[40px] w-[40px]" />
      <input
        ref={ref}
        type="file"
        id="file"
        className={clsx("hidden", invalid && "!border-error-600")}
        {...props}
      />
      <Label
        htmlFor="file"
        className="cursor-pointer font-normal text-[#475467]">
        <span className="font-[600] text-[#C75A51]"> Click to upload</span> or
        drag and drop
      </Label>
      <span className="text-[14px] text-sm font-normal text-[#475467]">
        .doc, PDF or JPG (max. 800x400px)
      </span>
    </div>
  </FieldWrapper>
));

export const PolicyField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper className="!flex-row items-center gap-x-3">
    <Checkbox
      ref={ref}
      id="policy"
      {...props}
      className={clsx(invalid && "!border-error-600")}
    />
    <label htmlFor="policy" className="text-base font-normal text-gray-600">
      You agree to our friendly privacy policy.
      {invalid && <span className="text-error-600">*</span>}
    </label>
  </FieldWrapper>
));

export const SubmitButton = () => {
  const pending = useUnit($pending);
  return (
    <Button
      appearance="destructive"
      size="xl"
      className="mt-2 h-[50px]"
      disabled={pending}>
      {pending ? <Spinner className="animate-infiniteSpin" /> : "Send message"}
    </Button>
  );
};
