import React from 'react';

const List = props => {
  const { listArr, listClicked, activeIndex, handleButtonClicks } = props;

  const list = listArr.map((listItem, index) => {
    // console.log('listItem: ', listItem);
    return (
      <div
        key={`${listItem.id}`}
        className='head'
        onClick={() => listClicked(index)}
        style={activeIndex === index ? { background: '#f9fbff', boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.05)' } : {}}
      >
        <div className='left'>
          <div className='list-number' style={activeIndex === index ? { background: '#2191ec', color: 'white' } : {}}>
            {index + 1}
          </div>
          <div className='name-and-time'>
            <span>
              Campaign {index + 1} - {listItem.campaignName}
            </span>
            <span className='time'>Created at {listItem.createdAt}</span>
          </div>
        </div>
        <div className='right'>
          <div className='icon-and-text' onClick={() => handleButtonClicks(1)}>
            <i
              className='fas fa-play'
              style={activeIndex === index ? { color: '#e4c426', marginBottom: '0.5rem' } : { marginBottom: '0.5rem' }}
            />
            <span>Play</span>
          </div>
          <div className='icon-and-text' onClick={() => handleButtonClicks(2)}>
            <i
              className='fas fa-comment-alt'
              style={activeIndex === index ? { color: '#488ee4', marginBottom: '0.5rem' } : { marginBottom: '0.5rem' }}
            />
            <span>Comment</span>
          </div>
          <div className='icon-and-text' onClick={() => handleButtonClicks(3)}>
            <i
              className='fas fa-history'
              style={activeIndex === index ? { color: '#488ee4', marginBottom: '0.5rem' } : { marginBottom: '0.5rem' }}
            />
            <span>Rename</span>
          </div>
          <div className='icon-and-text' onClick={() => handleButtonClicks(4)}>
            <i
              className='fas fa-trash'
              style={activeIndex === index ? { color: '#c70217', marginBottom: '0.5rem' } : { marginBottom: '0.5rem' }}
            />
            <span>Delete</span>
          </div>
        </div>
      </div>
    );
  });

  return list;
};

export default List;
