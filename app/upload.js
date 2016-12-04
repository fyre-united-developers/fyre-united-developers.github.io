(function() {

	function $id(id) {
		return document.getElementById(id);
	}

	function Output(msg) {
		var m = $id("messages");
		m.innerHTML = msg + m.innerHTML;
	}

	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}

	function FileSelectHandler(e) {

		FileDragHover(e);

		var files = e.target.files || e.dataTransfer.files;

		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
			$id("fileselect").files.push(f);
		}

	}

	function ParseFile(file) {
		Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size +
			"</strong> bytes</p>"
		);
	}

	function Init() {

		var fileselect = $id("fileselect"),
			filedrag = $id("filedrag"),
			submitbutton = $id("submitbutton");

		fileselect.addEventListener("change", FileSelectHandler, false);

		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			filedrag.style.display = "block";
		}

	}

	if (window.File && window.FileList && window.FileReader) {
		Init();
	}
})();
