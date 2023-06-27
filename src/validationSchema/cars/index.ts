import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  availability: yup.boolean().required(),
  organization_id: yup.string().nullable(),
});
