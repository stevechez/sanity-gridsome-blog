export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f888308829df51a93c0a382',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-j545xjuo',
                  apiId: 'a22d991d-5e5e-4fc4-8351-dc0237f5d8be'
                },
                {
                  buildHookId: '5f888309829df521aac09b2d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-9yfpcx2o',
                  apiId: 'a999d94f-dede-41ba-afcb-c9b41aa25015'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevechez/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-9yfpcx2o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
