export default {
  statics: {
    removeAll () {
      return this.remove({}).exec()
    },
  }
}