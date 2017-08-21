import service from '../model/course';

export const loading = () => ({
  type: 'LOADING'
});

export const receive = (responsejson) => ({
  type: 'SUCCESS',
  response: responsejson
});

export const CourseList = () => dispatch => {
  dispatch(loading());
  service.fetchCourseList({
    per_page: 99
  }).then((data) => {
    dispatch(receive(data));
  });
};
