
CKEDITOR.plugins.addExternal('MediaEmbed', '/ckplug/js/ckeditor/plugins/mediaembed/');

CKEDITOR.editorConfig = function( config )
{
	config.templates_files = [ '/ckplug/js/ckeditor/templates/template.js' ];

	config.extraPlugins = 'MediaEmbed';

    config.toolbar_custom = [
        ['Templates', 'Styles','Format','Font','FontSize','TextColor','BGColor','Maximize','Image'],
        ['Source'],
        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript','-','SpellChecker', 'Scayt'],
        ['Table','HorizontalRule'],
        ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','Link','Unlink','Anchor','Smiley','SpecialChar'],
		['MediaEmbed']
    ]
};