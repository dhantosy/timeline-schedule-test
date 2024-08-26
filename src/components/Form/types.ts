export interface FormDataProps {
  user: string,
  start: string,
  end: string,
}

export interface FormProps {
  errorMessage: string;
  onFormSubmit: ({ user, start, end }: FormDataProps) => void;
}
