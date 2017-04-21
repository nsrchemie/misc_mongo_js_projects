Template.addphotos.events({
'submit .addphotoform': () => {
	let file = $('#myphoto').get(0).files[0]
	if (file) {
		fsFile = new FS.File(file);
		Photos.insert(fsFile, (err,res) => {
			if(err) {
				console.log(err);
			} else {
				toastr.success('File Uploaded');
				Router.go('/');
			}
		});
	} else {
		toastr.error('No File Uploaded');
		Router.go('/add');
		}
	return false;
	}
});
