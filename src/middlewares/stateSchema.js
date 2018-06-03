export default {
  $id: '',
  type: 'object',
  definitions: {},
  $schema: '',
  properties: {
    comments: {
      $id: '/properties/comments',
      type: 'array',
      items: {
        $id: '/properties/comments/items',
        type: 'string',
        title: 'The 0th Schema ',
        default: '',
        examples: ['String 1', 'String 2']
      }
    },
    auth: {
      $id: '/properties/auth',
      type: 'boolean',
      title: 'The Auth Schema ',
      default: false,
      examples: [true]
    }
  }
};
