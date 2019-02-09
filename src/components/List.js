import React from 'react';

const List = props => {
  // console.log('props: ', props);
  const { listArr } = props;

  const list = listArr.map((listItem, index) => {
    // console.log('listItem: ', toString(listItem.createdAt));
    return (
      <div key={`${listItem.campaignName}-${index}`} className='head'>
        <div className='left'>
          <div className='list-number'>{index + 1}</div>
          <div className='name-and-time'>
            <span>
              Campaign {index + 1} - {listItem.campaignName}
            </span>
            <span className='time'>Created at {listItem.createdAt}</span>
          </div>
        </div>
        <div className='right'>
          <div className='icon-and-text'>
            <i className='fas fa-history' />
            <span>Play</span>
          </div>
          <div className='icon-and-text'>
            <i className='fas fa-history' />
            <span>Comment</span>
          </div>
          <div className='icon-and-text'>
            <i className='fas fa-history' />
            <span>Rename</span>
          </div>
          <div className='icon-and-text'>
            <i className='fas fa-history' />
            <span>Delete</span>
          </div>
        </div>
      </div>
    );
  });

  return list;
};

export default List;
