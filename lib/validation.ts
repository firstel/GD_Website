// lib/validation.ts
export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  interest?: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  consent: boolean;
}

export function validateForm(data: FormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.company.trim()) {
    errors.company = "Company is required";
  }

  if (!data.interest) {
    errors.interest = "Please select an interest";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
