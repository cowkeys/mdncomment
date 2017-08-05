import React from 'react';
import { Input } from 'antd';
import { connect } from 'dva';
import {styles} from 'Comments.css'


const Comment = (prop) => {
  return (
    <div>
      mdnan
        <Input className={styles.comment_input} type="textarea" rows={4} text = "afa"/>
    </div>
  );
};


function mapStateToProps(state) {
    const { list } = state.comment;
    return {
        list,
    };
}

export default connect(mapStateToProps)(Comment);


