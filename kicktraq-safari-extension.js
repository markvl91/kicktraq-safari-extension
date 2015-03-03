"use strict";

jQuery(function() {

	function loadKicktraqImage() {
		var currentPath = document.location.pathname;
		var project = "";
		var imageToLoad = "";
		
		var contentDiv = document.querySelector('.container-flex');
		var image = document.createElement("img");
		var imageLink = document.createElement("a");
		var imageContainer = document.createElement("div");
		var placeholder = document.createElement("span");
		placeholder.innerHTML = "(Loading your very own snazzy kicktraq chart)";
		placeholder.style.color = "gray";
		placeholder.style.lineHeight = "270px";
		
		imageContainer.id = "kicktraq"
	//	imageContainer.style.textAlign = "center";
	//	imageContainer.style.height = "270px";
	//	imageContainer.style.width = "940px";
	//	imageContainer.style.maxWidth = "100%";
	//	imageContainer.style.margin = "auto";
	//	imageContainer.style.marginBottom = "10px";
	//	
	//	image.style.width = "100%";
		
		if(currentPath.indexOf('https://www.kickstarter.com/projects/') == 0) {
			imageContainer.appendChild(placeholder);
			contentDiv.insertBefore(imageContainer, contentDiv.firstChild);
		}
		
		if(currentPath.indexOf("/posts") != -1 || currentPath.indexOf("/backers") != -1 || currentPath.indexOf("/comments") != -1) {
			project = currentPath.substr(0, currentPath.lastIndexOf("/") + 1);
			if(currentPath.indexOf("/posts") != -1 || currentPath.indexOf("/comments") != -1) {
				imageToLoad = "//www.kicktraq.com" + project + "/dailycomments.png";
			} else if(currentPath.indexOf("/backers") != -1) {
				imageToLoad = "//www.kicktraq.com" + project + "/backerchart.png";
			}
		} else {
			project = currentPath;
			imageToLoad = "//www.kicktraq.com" + project + "/dailychart.png";
		}
		
		image.src = imageToLoad;
		$(image).load(function() {
			imageLink.href = "//www.kicktraq.com" + project;
			imageLink.appendChild(image);
			imageContainer.removeChild(placeholder);
			imageContainer.appendChild(imageLink);
		})
	}

	loadKicktraqImage();
	window.onpopstate = loadKicktraqImage;
});