export default {
  widgets: [
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
                  buildHookId: '5e6922a9e7e00a10885c6df1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6eu8y44m',
                  apiId: 'f7871cdd-4cf7-4cac-9e51-d48256207f92'
                },
                {
                  buildHookId: '5e6922a93051ce01c0bbe789',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ng66z2bh',
                  apiId: '6abe4b79-c16b-4594-a3c5-311d9cf9e90d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hanseilers/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ng66z2bh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
