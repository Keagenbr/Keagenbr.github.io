export default {
  collections: [
    {
      name: 'projects',
      label: 'Projects',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'markdown' },
        { name: 'image', type: 'image' },
        { name: 'tags', type: 'list', items: { type: 'text' } },
        { name: 'url', type: 'text' },
      ],
    },
  ],
};