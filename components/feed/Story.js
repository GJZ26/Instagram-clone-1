function Story(props) {
  return (
    <div className=''>
        <img className='itemHistories' src={props.img} alt="profile"/>
        <p className='text-xs w-14 truncate'>{props.username}</p>
    </div>
  )
}

export default Story;
