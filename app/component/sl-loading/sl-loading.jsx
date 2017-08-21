import React from 'react';
import '../../assets/app.less';
import IconLoading from '../../assets/images/sltimg.gif';

function Unpublish() {
  return (
    <div className="sl-loading">
      <img src={IconLoading} alt=""></img>
    </div>
  );
}

export default Unpublish;
