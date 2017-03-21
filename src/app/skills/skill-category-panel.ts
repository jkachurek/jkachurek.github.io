export const SkillCategoryPanel: angular.IComponentOptions = {
	template: require('./skill-category-panel.html'),
	bindings: { category: '<', skills: '<' },
	controller: function() { this.show = true; }
};
