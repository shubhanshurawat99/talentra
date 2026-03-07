// ─────────────────────────────────────────────────────────
// MODEL: recruiterModel.js
// Defines Employer/Recruiter contact form schema + validation.
// ─────────────────────────────────────────────────────────

export const RECRUITER_SCHEMA = {
  company: '',
  contactPerson: '',
  email: '',
  phone: '',
  message: '',
};

export function createRecruiter(data = {}) {
  return { ...RECRUITER_SCHEMA, ...data };
}

export function validateRecruiter(data) {
  const errors = {};

  if (!data.company?.trim())
    errors.company = 'Company name is required.';

  if (!data.contactPerson?.trim())
    errors.contactPerson = 'Contact person name is required.';

  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'A valid email address is required.';

  if (!data.phone?.trim())
    errors.phone = 'Phone number is required.';
  else if (data.phone.trim().length < 10)
    errors.phone = 'Phone number must be at least 10 characters.';
  else if (data.phone.trim().length > 20)
    errors.phone = 'Phone number must not exceed 20 characters.';

  if (!data.message?.trim())
    errors.message = 'Please enter a message.';
  else if (data.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';
  else if (data.message.trim().length > 1000)
    errors.message = 'Message must not exceed 1000 characters.';

  return errors;
}
