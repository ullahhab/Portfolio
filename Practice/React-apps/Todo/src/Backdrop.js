function Backdrop(props){
	return (
		//<!-- Since this our own function we would like it to point to onclick. The name can be anything. It can either be something props.hahah. Make sure to set this in Todo as well -->
		<div className='backdrop' onClick={props.onClick}/>
	);
}
export default Backdrop;
		
