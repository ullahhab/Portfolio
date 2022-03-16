function route(){
	// '/' will match two paths / and new-page react function
	// To apply only one use <switch></switch> wrapper if you want to make it strict use <Route path = '/' exact>
	return (
		<div>
		<Route path='/'>
		<App />
		</Route>


		<Route path='/new-page'>
		<Todo />
		</Route>
		

	}
