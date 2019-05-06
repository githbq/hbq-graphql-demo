import mongoose from 'mongoose'

const Student = mongoose.model('Student')

export const saveStudent = async (ctx, next) => {
  const opts = ctx.request.body
  
  // const student = new Student(opts)
  const student = new Student({
    name: '张三',
    sex: '男',
    age: '25',
    info:'5ccfe069c13ac4974487970a'
  })
  const saveStudent = await student.save()

  if (saveStudent) {
    ctx.body = {
      success: true,
      data: saveStudent
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

export const fetchStudent = async (ctx, next) => {
  const students = await Student.find({})

  if (students.length) {
    ctx.body = {
      success: true,
      data: students
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}


export const fetchStudentDetail = async (ctx, next) => {
  const students = await Student.find({}).populate({
    path: 'info',
    select: 'hobby height weight'
  }).exec()

  if (students.length) {
    ctx.body = {
      success: true,
      data: students
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}