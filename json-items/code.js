'use strict';

angular.module('sampleDirectives', [])
	.controller('ListCtrl', function($scope, $log){
		$scope.list = [
			{
				type: "audio",
				title: "Audio Title"
			},
			{
				type: "video",
				title: "Video Title"
			},
			{
				type: "text",
				title: "Note Title"
			},
			{
				type: "video",
				title: "Video2 Title"
			}
		];
	})
	.directive('post', function($compile) {
		return {
			scope: {
				item: '='
			},
			link: function(scope, element) {
				var _templateAudio = '<div audio-post="item" title="item.title"></div>',
					_templateVideo = '<h3>{{ item.title }}</h3>',
					_templateNote  = '<h1>{{ item.title }}</h1>';

				var html;
				switch(scope.item.type) {
					case 'audio':
						html = $compile( _templateAudio )(scope);
						break;
					case 'video':
						html = $compile( _templateVideo )(scope);
						break;
					case 'text':
						html = $compile( _templateNote )(scope);
						break;
				}
				element.append(html);
			}
		};
	})
	.directive('audioPost', function() {
		return {
			template: '<h2>Audio: {{ audio.title }}</h2>',
			scope: {
				audio: '=audioPost'
			}
		}
	})