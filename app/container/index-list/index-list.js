import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CourseList } from '../../actions/index';
import './index-list.less';
import IndexItem from '../../component/index-item/index-item';
import Loading from '../../component/sl-loading/sl-loading';

class IndexList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(CourseList());
  }

  goCourse(id, purchasedif) {
    if (purchasedif) {
      window.location = `purchased.html?course_id=${id}`;
    } else {
      window.location = `course.html?course_id=${id}`;
    }
  }

  render() {
    const { item, isLoading } = this.props;
    let res = '';
    if (isLoading) {
      res = (<Loading />);
    } else {
      res = (
        <div className="index-list">
          {item.map((value, index) => <IndexItem
            goCourse={this.goCourse} key={index} item={value}
          />)}
        </div>
      );
    }
    return res;
  }
}
IndexList.propTypes = {
  item: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(IndexList);
