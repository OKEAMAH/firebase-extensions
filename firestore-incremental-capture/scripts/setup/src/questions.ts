const BIGQUERY_VALID_CHARACTERS = /^[a-zA-Z0-9_]+$/;
const FIRESTORE_VALID_CHARACTERS = /^[^\/]+$/;

const validateInput = (value: any, name: string, regex: RegExp) => {
  if (!value || value === '' || value.trim() === '') {
    return `Please supply a ${name}`;
  }
  if (!value.match(regex)) {
    return `The ${name} must only contain letters or spaces`;
  }
  return true;
};

export default [
  {
    message: 'What is your Firebase project ID?',
    name: 'project',
    type: 'input',
    validate: value =>
      validateInput(value, 'project ID', FIRESTORE_VALID_CHARACTERS),
  },
  {
    message:
      'What is the ID of the BigQuery dataset the raw changelog lives in? (The dataset and the raw changelog must already exist!)',
    name: 'dataset',
    type: 'input',
    validate: value =>
      validateInput(value, 'dataset ID', BIGQUERY_VALID_CHARACTERS),
  },
  {
    message:
      'What is the name of the Cloud Firestore collection for which you want to generate a schema view?',
    name: 'tableNamePrefix',
    type: 'input',
    validate: value =>
      validateInput(value, 'table name prefix', BIGQUERY_VALID_CHARACTERS),
  },
  {
    message:
      'Where should this script look for schema definitions? (Enter a comma-separated list of, optionally globbed, paths to files or directories).',
    name: 'schemaFiles',
    type: 'input',
  },
];