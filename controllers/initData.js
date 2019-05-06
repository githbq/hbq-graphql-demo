import mongoose from 'mongoose'
const Course = mongoose.model('Course')
const Info = mongoose.model('Info')
const Student = mongoose.model('Student')


export const init = async (ctx, next) => {

  await Promise.all([Course.removeAll(), Info.removeAll(), Student.removeAll(),])
  console.log('已删除 courses,infos,students 集合所有数据')

  const course = new Course({
    title: '英语',
    desc: '英语课程',
    page: '1',
    author: 'Mr hu',
  })
  const courseResult = await course.save()

  const course2 = new Course({
    title: '数学',
    desc: '数学课程',
    page: '1',
    author: 'Mr wang',
  })
  const courseResult2 = await course2.save()

  const info = new Info({
    hobby: ['游泳', '唱歌', '旅游'],
    height: '177cm',
    weight: Math.ceil(Math.random() * 100)
  })

  const infoResult = await info.save()

  const info2 = new Info({
    hobby: ['跳高', '跳远', '铁人三项'],
    height: '180cm',
    weight: Math.ceil(Math.random() * 100)
  })

  const infoResult2 = await info2.save()

  const student = new Student({
    name: '张三',
    sex: '男',
    age: '25',
    info: infoResult._id
  })

  const studentResult = await student.save()

  const student2 = new Student({
    name: '李四',
    sex: '女',
    age: '23',
    info: infoResult2._id
  })

  const studentResult2 = await student2.save()

  ctx.body = {
    success: true,
    data: {
      infoResult,
      infoResult2,
      courseResult,
      courseResult2,
      studentResult,
      studentResult2
    }
  }
}