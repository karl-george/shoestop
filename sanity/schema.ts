import { type SchemaTypeDefinition } from 'sanity';
import vendor from './vendor';
import phone from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vendor, phone],
};
