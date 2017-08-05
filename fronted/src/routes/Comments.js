import React from 'react';
import { connect } from 'dva';
import styles from './Comments.css';
import { Input } from 'antd';

const Comments = (prop) => {
  return (
    <div className={styles.normal}>
        <Input className={styles.comment_input} type="textarea" rows={4} />
    </div>
  );
}

function mapStateToProps(state) {
    const { list } = state.comment;
    return {
        list,
    };
}

export default connect(mapStateToProps)(Comments);
