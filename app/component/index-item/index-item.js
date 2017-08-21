import React from 'react';
import PropTypes from 'prop-types';
import './index-item.less';

const propTypes = {
  item: PropTypes.object.isRequired
};

const IndexItem = (prop) => {
  const { id, money, name, detail, students, cover, purchasedif,
    lessons_num: lessonsNum, update_status: updateStatus } = prop.item;
  return (
    <div className="course-wrap tap-bg" onClick={() => prop.goCourse(id, purchasedif)}>
      <div className="course-bd">
        <img className="course-cover" src={cover} alt="" />
        <div className="course-shadow">
          <div className="course-price">¥{money}</div>
          <div className="course-name one-line">{name}</div>
          <div className="course-des one-line">{detail}</div>
          <div className="course-tool">
            <div className="course-process">
              {students}人参加 | {+updateStatus === 1 ? '已更新' : '全'}{lessonsNum}课
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropTypes.IndexItem = propTypes;
export default IndexItem;
