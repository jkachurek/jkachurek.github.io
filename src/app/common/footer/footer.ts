import './footer.scss';

export const FooterComponent: angular.IComponentOptions = {
	template: require('./footer.html'),
	controller: function() { this.year = new Date().getFullYear(); }
}
