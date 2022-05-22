export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6289f5c45a97cd352854ed4a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kfnhgtrr',
                  apiId: 'fc568435-9d5f-42d7-a9b6-3e24a14205be'
                },
                {
                  buildHookId: '6289f5c50b60f930c15f265d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cr3kry49',
                  apiId: 'c8d8c507-2c63-4cc4-9c5e-cc5f0420a8fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MisterHutch/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cr3kry49.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
