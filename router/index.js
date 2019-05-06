import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
import { saveInfo, fetchInfo } from '../controllers/info'
import { saveStudent, fetchStudent, fetchStudentDetail } from '../controllers/student'
import { saveCourse, fetchCourse } from '../controllers/course'
import { init } from '../controllers/initData'

import schema from '../graphql/schema'


const router = require('koa-router')()

router.get('/init', init)

router.post('/info', saveInfo)
  .get('/info', fetchInfo)
  .post('/student', saveStudent)
  .get('/student', fetchStudent)
  .get('/studentDetail', fetchStudentDetail)
  .post('/course', saveCourse)
  .get('/course', fetchCourse)




router.post('/graphql', async (ctx, next) => {
  await graphqlKoa({ schema: schema })(ctx, next)
})
  .get('/graphql', async (ctx, next) => {
    await graphqlKoa({ schema: schema })(ctx, next)
  })
  .get('/graphiql', async (ctx, next) => {
    await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next)
  })

module.exports = router
