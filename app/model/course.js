import Request from '../assets/libs/request';

const course = () => ({
  fetchCourseList(data) {
    return Request.get('courses', data);
  }
});

module.exports = course();
