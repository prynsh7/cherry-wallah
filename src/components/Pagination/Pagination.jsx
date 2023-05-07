import React from 'react';
import { Pagination } from 'antd';




const CustomPagination = ({ total, onChange, changePageSize, currentPage}) => (
  <div className='w-[100%] mb-[100px] mt-[20px] items-end justify-end flex'>
  <Pagination
    total={total}
    current={currentPage}
    showQuickJumper
    showSizeChanger
    // onShowSizeChange={changePageSize}
    pageSizeOptions={["10", "20", "50"]}
    showTotal={(total) => `Total ${total} items`}
    onChange={onChange}
  />
  </div>
);

export default CustomPagination;