import { type PropsTableProps } from 'xy-shared';

export const signature: PropsTableProps = {
  props: [
    { name: 'Params' },
    {
      name: 'nodeIds',
      type: 'string | string[]',
      description:
        'A single node ID or an array of node IDs whose `data` objects you want to observe',
    },
    { name: 'Returns' },
    { name: '', type: 'any | any[]' },
  ],
};
